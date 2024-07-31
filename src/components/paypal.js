import { faCcPaypal } from "@fortawesome/free-brands-svg-icons";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Paypal(props){

const CreatePaypalPayment = event =>{
  
    const response =  axios.post(
    'https://api-m.sandbox.paypal.com/v1/oauth2/token',
    new URLSearchParams({
        'grant_type': 'client_credentials'
    }),
    {
        auth: {
            username: 'AWla8-NynFHzR2idw-3ZrJXi2Fq_EvEJe9W7YiwWlO2B1SARjr2evfpOIc2Oa94G5qm9wlOtFE9RiJCF',
            password: 'EN70Okt8s3Ad8q_ofzw7rroY1eVk1BH0xGX_VQ7h3OUUc01Z9vd5EFsCLGTTWyjm2l39COghQmWtW5NR'
        }
    }
).then(async function(response) {
const token = response.data.access_token
const amount=parseFloat(props.value)
console.log(amount)
//const amount = 0.5*1
const response2 = await axios.post(
    'https://api-m.sandbox.paypal.com/v1/payments/payment',
    // '{\n  "intent": "sale",\n  "payer": {\n    "payment_method": "paypal"\n  },\n  "transactions": [\n    {\n      "amount": {\n        "total": "30.11",\n        "currency": "USD",\n        "details": {\n          "subtotal": "30.00",\n          "tax": "0.07",\n          "shipping": "0.03",\n          "handling_fee": "1.00",\n          "shipping_discount": "-1.00",\n          "insurance": "0.01"\n        }\n      },\n      "description": "The payment transaction description.",\n      "custom": "EBAY_EMS_90048630024435",\n      "invoice_number": "48787589673",\n      "payment_options": {\n        "allowed_payment_method": "INSTANT_FUNDING_SOURCE"\n      },\n      "soft_descriptor": "ECHI5786786",\n      "item_list": {\n        "items": [\n          {\n            "name": "hat",\n            "description": "Brown hat.",\n            "quantity": "5",\n            "price": "3",\n            "tax": "0.01",\n            "sku": "1",\n            "currency": "USD"\n          },\n          {\n            "name": "handbag",\n            "description": "Black handbag.",\n            "quantity": "1",\n            "price": "15",\n            "tax": "0.02",\n            "sku": "product34",\n            "currency": "USD"\n          }\n        ],\n        "shipping_address": {\n          "recipient_name": "Brian Robinson",\n          "line1": "4th Floor",\n          "line2": "Unit #34",\n          "city": "San Jose",\n          "country_code": "US",\n          "postal_code": "95131",\n          "phone": "011862212345678",\n          "state": "CA"\n        }\n      }\n    }\n  ],\n  "note_to_payer": "Contact us for any questions on your order.",\n  "redirect_urls": {\n    "return_url": "https://example.com/return",\n    "cancel_url": "https://example.com/cancel"\n  }\n}',
    {
        'intent': 'sale',
        'payer': {
            'payment_method': 'paypal',
           
        }, "transactions": [{
            "item_list": {
                "items": [{
                    "name": "l",
                    "sku": "001",
                    "price": parseFloat(amount),
                    //"price":0.5,
                    "currency": "USD",
                    "quantity":1
                }]
            },
            "payee":{"email":"user13@gmail.com"},
            "amount": {
                "currency": "USD",
                "total": amount
            },
            "description": "Hat for the best team ever"
        }],

        'note_to_payer': 'Contact us for any questions on your order.',
        'redirect_urls': {
            'return_url': 'http://localhost:8000/payment/paypal/success/'+amount,
            'cancel_url': 'https://example.com/cancel'
        }
    },
    {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        }
    }
)
const url= response2.data.links.filter(e=>e.rel=='approval_url')[0].href
console.log(url)
let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=600,left=100,top=100`;
window.open(url,"payment",params)
})

}
return (<div>
    <PayPalScriptProvider options={{ "client-id": "AWla8-NynFHzR2idw-3ZrJXi2Fq_EvEJe9W7YiwWlO2B1SARjr2evfpOIc2Oa94G5qm9wlOtFE9RiJCF" }}>
                   <button className="btn btn-medium btn-normal text-uppercase" onClick={CreatePaypalPayment}><FontAwesomeIcon icon={faCcPaypal} size="4x" style={{ marginRight: '10px' }} /></button>
                   </PayPalScriptProvider>
</div>)
}