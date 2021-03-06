import EnterParkingLot from "../src/core/usecase/EnterParkingLot";
import ParkingLotRepositoryMemory from "../src/infra/repository/ParkingLotRepositoryMemory";

test ("should be parking lot", async function() {
  const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
  const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
  await enterParkingLot.execute("shopping", "MMM-0001", new Date("2021-03-01T10:00:00"));
  //expect(parkingLot.code).toBe("shopping");
});
