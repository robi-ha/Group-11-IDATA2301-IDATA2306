-- Insert sample users
INSERT INTO USER (id, username, password, role) VALUES (1, 'dave', '$2a$10$BZKsTVwP0HZ6uWkAp/jEVu/3QQocUXKzKPt7Mqa8qBbZ8FUwZrUqW', 'USER');
INSERT INTO USER (id, username, password, role) VALUES (2, 'chuck', '$2a$10$RRZ3EPLFy3fGdJGcOnNzjOPonG9xSMejsyOCZUKqIvcY8CrZ4L/iW', 'ADMIN');
-- Passwords are bcrypt hashed: "Dangerous2024" and "Nunchucks2024"

-- Insert sample flights
INSERT INTO FLIGHT (id, flight_name, airline, origin, destination, departure_date, return_date, class_type, features, image_url) VALUES
                                                                                                                                     (1, 'Delta Flight 425', 'Delta Air Lines', 'New York (JFK)', 'Los Angeles (LAX)', '2025-08-15', null, 'Economy', 'Wi-Fi, Seat-back Screens, Free Snacks', 'https://images.app.goo.gl/zYxSrW6yM3jmM6cV7'),
                                                                                                                                     (2, 'Norwegian Flight 708', 'Norwegian Air Shuttle', 'Oslo (OSL)', 'Ålesund (AES)', '2025-09-05', '2025-09-12', 'Economy Flex', 'Free Breakfast, Seat Reservation, Fast Track', 'https://images.app.goo.gl/kRcdsYSS7d6zqa916');

-- Insert flight prices
INSERT INTO FLIGHT_PRICES (flight_id, prices_key, prices) VALUES
                                                              (1, 'SkyScanner', 150.0),
                                                              (1, 'Expedia', 175.0),
                                                              (2, 'Momondo', 1200.0),
                                                              (2, 'Kayak', 1400.0);