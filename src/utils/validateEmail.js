export default function emailIsValid (email) {
    
    return /\S+@\S+\.\S+/.test(email)
  
}