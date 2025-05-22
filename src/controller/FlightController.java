package src.controller;

import src.model.Flight;
import src.repository.FlightRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/flights")
@CrossOrigin
public class FlightController {
    private final FlightRepository flightRepository;

    public FlightController(FlightRepository flightRepository) {
        this.flightRepository = flightRepository;
    }

    @GetMapping
    public List<Flight> getAllFlights() {
        return flightRepository.findAll();
    }

    @GetMapping("/{id}")
    public Flight getFlight(@PathVariable Long id) {
        return flightRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Flight addFlight(@RequestBody Flight flight) {
        return flightRepository.save(flight);
    }

    @PutMapping("/{id}")
    public Flight updateFlight(@PathVariable Long id, @RequestBody Flight flightDetails) {
        return flightRepository.findById(id).map(flight -> {
            flight.setFlightName(flightDetails.getFlightName());
            flight.setOrigin(flightDetails.getOrigin());
            flight.setDestination(flightDetails.getDestination());
            flight.setPrices(flightDetails.getPrices());
            return flightRepository.save(flight);
        }).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteFlight(@PathVariable Long id) {
        flightRepository.deleteById(id);
    }
}

