
const useCountries = ()=>{

   const indianStates = ['Maharashtra', 'Karnataka', 'Delhi'];
const citiesByState = {
  Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
  Karnataka: ['Bangalore', 'Mysore'],
  Delhi: ['New Delhi', 'Dwarka']
}
const countries = ['India','Usa']

return {indianStates,citiesByState,countries}
}

export default useCountries