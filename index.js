function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    const distanceInBlocks = Math.abs(pickupLocation-hqLocation);
    return distanceInBlocks;
  }
  function distanceFromHqInFeet(pickupLocation) {
    const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
    const distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
  }
  function  distanceTravelledInFeet(start, destination){
    const numberTravelled =  Math.abs((destination-start)*264);
    return numberTravelled;
  }
  function calculatesFarePrice(start,destination){
    const numberTravelled = distanceTravelledInFeet(start, destination);
    if (numberTravelled<400){
        const charges = 0;
        return charges;
  }
  else if (numberTravelled>=400 && numberTravelled<=2000){
    const charges =  Math.abs(.02*(400-numberTravelled));    
    return charges;
  }
  else if (numberTravelled>2000 && numberTravelled<=2500){
    const charges = 25;
    return charges;   
  }
  else{
   return 'cannot travel that far' ;
  }
}
