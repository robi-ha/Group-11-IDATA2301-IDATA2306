package src.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.Map;

@Entity
public class Flight {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String flightName;
    private String airline;
    private String origin;
    private String destination;
    private LocalDate departureDate;
    private LocalDate returnDate;
    private String classType;
    private String features;
    private String imageUrl;

    @ElementCollection
    private Map<String, Double> prices;

    // Getters and Setters
}

