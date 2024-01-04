const express = require('express')
const app = express();
const axios = require('axios');

const PORT = 3000;

const url = 'https://admin.globaltel123.com/cs_web_service.php';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () =>{
 console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

app.post('/getBalance', (req, res) => {
  const data = {
    ws_username: 'wild_api',
    ws_password: 'Wild123',
    action: 'Get_Balance',
    ws_account: 'wild_template'
  }

  axios.post(url, null, {
    params:data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(response => { 
    console.log('Response',response.data)
    const status = response.status || 200 
    const messageMatch = /<pre>(.*?)<\/pre>/i.exec(response.data);
    const message = messageMatch && messageMatch[1] ? messageMatch[1] : null;

    // Creating a JSON object with the error message
    const jsonResponse = {
      message: message
    };
    res.status(status).json(jsonResponse);
  })
  .catch(error => {
    console.error('Error', error.message)
    const status = error.response ? error.response.status : 500;
    res.status(status).json({ error: error.message });
  });
});

app.post('/delete', (req, res) => { 
  const data = {
    ws_username: 'wild_api',
    ws_password: 'Wild123',
    action: 'ANI_Delete',
    ws_account: 'wild_template',
    ws_ani: req.body.ws_ani
  }

  axios.post(url, null, {
    params:data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(response => { 
    console.log('Response',response.data)
    const status = response.status || 200
    const messageMatch = /<pre>(.*?)<\/pre>/i.exec(response.data);
    const message = messageMatch && messageMatch[1] ? messageMatch[1] : null;

    // Creating a JSON object with the error message
    const jsonResponse = {
      message: message
    };
    res.status(status).json(jsonResponse);
  })
  .catch(error => {
    console.error('Error', error.message)
    const status = error.response ? error.response.status : 500;
    res.status(status).json({ error: error.message });
  });
});

app.post('/createAccount', (req, res) => {
  const data = {
    ws_username: 'wild_api',
    ws_password: 'Wild123',
    action: 'Account_Create',
    ws_account: 'wild_template',
    pinlength: req.body.pinlength,
    acct_status: req.body.account_status
  }

  axios.post(url, null, {
    params:data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(response => { 
    console.log('Response',response.data)
    const status = response.status || 200
    const messageMatch = /<pre>(.*?)<\/pre>/i.exec(response.data);
    const message = messageMatch && messageMatch[1] ? messageMatch[1] : null;

    // Creating a JSON object with the error message
    const jsonResponse = {
      message: message
    };
    res.status(status).json(jsonResponse);
  })
  .catch(error => {
    console.error('Error', error.message)
    const status = error.response ? error.response.status : 500;
    res.status(status).json({ error: error.message });
  });
});

app.post('/addCaller', (req, res) => {
  const data = {
    ws_username: 'wild_api',
    ws_password: 'Wild123',
    action: 'ANI_Add',
    ws_account: 'wild_template', 
    ws_ani: req.body.ws_ani
  }

  axios.post(url, null, {
    params:data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(response => { 
    console.log('Response',response.data)
    const status = response.status || 200
    const messageMatch = /<pre>(.*?)<\/pre>/i.exec(response.data);
    const message = messageMatch && messageMatch[1] ? messageMatch[1] : null;

    // Creating a JSON object with the error message
    const jsonResponse = {
      message: message
    };
    res.status(status).json(jsonResponse);
  })
  .catch(error => {
    console.error('Error', error.message)
    const status = error.response ? error.response.status : 500;
    res.status(status).json({ error: error.message });
  });
});

app.post('/rechargeAccount', (req, res) => {
  const data = {
    ws_username: 'wild_api',
    ws_password: 'Wild123',
    action: 'Recharge_Account',
    ws_account: 'wild_template', 
    recharge_amount: req.body.rechargeAmount,
    recharge_charge: req.body.rechargeCharge,
    currency: req.body.currency,
    payment_type: req.body.paymentType
  }

  axios.post(url, null, {
    params:data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(response => { 
    console.log('Response',response.data)
    const status = response.status || 200
    const messageMatch = /<pre>(.*?)<\/pre>/i.exec(response.data);
    const message = messageMatch && messageMatch[1] ? messageMatch[1] : null;

    // Creating a JSON object with the error message
    const jsonResponse = {
      message: message
    };
    res.status(status).json(jsonResponse);
  })
  .catch(error => {
    console.error('Error', error.message)
    const status = error.response ? error.response.status : 500;
    res.status(status).json({ error: error.message });
  });
});

app.post('/setAccountExpiration', (req, res) => {
  const data = {
    ws_username: 'wild_api',
    ws_password: 'Wild123',
    action: 'Account_Set_Expiration',
    ws_account: 'wild_template', 
    expiration_date: req.body.expirationDate 
  }

  axios.post(url, null, {
    params:data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(response => { 
    console.log('Response',response.data)
    const status = response.status || 200
    const messageMatch = /<pre>(.*?)<\/pre>/i.exec(response.data);
    const message = messageMatch && messageMatch[1] ? messageMatch[1] : null;

    // Creating a JSON object with the error message
    const jsonResponse = {
      message: message
    };
    res.status(status).json(jsonResponse);
  })
  .catch(error => {
    console.error('Error', error.message)
    const status = error.response ? error.response.status : 500;
    res.status(status).json({ error: error.message });
  });
});

app.post('/sendSMS', (req, res) => {
  const data = {
    ws_username: 'wild_api',
    ws_password: 'Wild123',
    action: 'SEND_SMS',
    ws_account: '1111', 
    ws_ani: req.body.ws_ani,
    ws_message: req.body.message 
  }

  axios.post(url, null, {
    params:data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(response => { 
    console.log('Response',response.data)
    const status = response.status || 200
    const messageMatch = /<pre>(.*?)<\/pre>/i.exec(response.data);
    const message = messageMatch && messageMatch[1] ? messageMatch[1] : null;

    // Creating a JSON object with the error message
    const jsonResponse = {
      message: message
    };
    res.status(status).json(jsonResponse);
  })
  .catch(error => {
    console.error('Error', error.message)
    const status = error.response ? error.response.status : 500;
    res.status(status).json({ error: error.message });
  });
});