import ParkedCar from "../entity/ParkedCar";
import ParkingLotRepository from "../entity/repository/ParkingLotRepositoty";

export default class EnterParkingLot {
  parkingLotRepository: ParkingLotRepository;

  //desacoplando com inversão dependência
  constructor(parkingLotRepository: ParkingLotRepository) {
    this.parkingLotRepository = parkingLotRepository;
  }

  async execute(code: string, plate: string, date: Date) {
    const parkingLot = await this.parkingLotRepository.getParkingLot(code);
    const parkedCar = new ParkedCar(code, plate, date);
    if (parkingLot.isOpen(parkedCar.date)) throw new Error("The parking lot is closed");
    await this.parkingLotRepository.saveParkedCar(parkedCar.code, parkedCar.plate, parkedCar.date);
    return parkingLot;
  }
}
