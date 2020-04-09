import React, {useState} from "react";


const ContactForm = () => {

	const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    email: '',
    message: ''
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        email: '',
        message: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }
	
	return (
		<>
			<form onSubmit={handleOnSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && (
        <div className="success">{status.info.msg}</div>
      )}
			<style jsx>{`
				label{
					font-family:"Lobster", sans-serif;
					font-size:18px;
					text-align:left;
					width:100%;
					color:#fff;
				}
				button {
					background: #fffff0;
					font-family: "Ubuntu", sans-serif;
					font-size: 18px;
					font-weight: 600;
					width: 100%;
					padding: 15px;
					margin: 5px 0;
				}
				form {
					background: #333;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					margin: 15px auto;
				}
				input,
				textarea {
					width: 100%;
					margin: 5px 0;
					padding: 15px;
					font-size: 16px;
					resize: none;
					border: none;
				}
				textarea {
					height: 200px;
				}
			`}</style>
		</>
	);
};

export default ContactForm;
