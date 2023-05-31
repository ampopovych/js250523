// ДЗ 1, Модуль 1
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line
  
//     switch (password)  {
//       case  null:
//       message = "Canceled by user!";
//         break;
//       case ADMIN_PASSWORD :
//       message = "Welcome!";
//         break ;
//       default : 
//       message = "Access denied, wrong password!";
//     }
  
//     // Change code above this line
//     return message;
//   }


//   function getShippingCost(country) {
//     let message;
//     // Change code below this line
//   switch (country) {
//     case "China" :
//       message = `Shipping to ${country} will cost 100 credits`;
//       break;
//        case "Chile" :
//       message = `Shipping to ${country} will cost 250 credits`;
//       break;
//     case "Australia" :
//       message = `Shipping to ${country} will cost 170 credits`;
//       break;
//        case "Jamaica" :
//       message = `Shipping to ${country} will cost 120 credits`;
//       break;
//       default :
//       message = `Sorry, there is no delivery to your country`
//   }
  
//     // Change code above this line
//     return message;
//   }
  

// function getSubstring(string, length) {
//     const substring = getSubstring.slice(0, length) ; // Change this line
  
//     return substring;
//   }


function formatMessage(message, maxLength) {
    let result;
    // Change code below this line
  
  if (message.length > maxLength) {
    result = `${message.slice(0, maxLength)} ...`;
  } else {
    result = message;
}
    /// Change code above this line
    return result;
  }
  console.log(formatMessage("cmvndnb dfnlkndf kdfnlkdnmf lkdnvfl", 10));
  console.log(formatMessage("cmvndnb dfnlkndf kdfnlkdnmf lkdnvfl", 15));
  console.log(formatMessage("cmvndnb dfnlkndf kdfnlkdnmf lkdnvfl", 20));
  console.log(formatMessage("cmvndnb dfnlkndf kdfnlkdnmf lkdnvfl", 25));
  console.log(formatMessage("cmvndnb dfnlkndf kdfnlkdnmf lkdnvfl", 30));
  console.log(formatMessage("cmvndnb dfnlkndf kdfnlkdnmf lkdnvfl", 35));
  console.log(formatMessage("cmvndnb dfnlkndf kdfnlkdnmf lkdnvfl", 40));
  console.log(formatMessage("cmvndnb dfnlkndf kdfnlkdnmf lkdnvfl", 45));
  