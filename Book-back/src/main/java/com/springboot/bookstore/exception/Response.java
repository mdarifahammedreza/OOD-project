package com.springboot.bookstore.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class Response {

    /** Success response only for status & message */
    public static ResponseEntity<Object> Success(HttpStatus status, String message) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("status", status);
        map.put("message", message);

        return new ResponseEntity<Object>(map, status);
    }

    /** Success response with styatus, message & data */
    public static ResponseEntity<Object> Success(HttpStatus status, String message, Object data) {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("status", status);
        map.put("message", message);
        map.put("data", data);

        return new ResponseEntity<Object>(map, status);
    }

    /** Error response with status, message & errors */
    public static ResponseEntity<Object> Error(HttpStatus status, String message, Map<String, String> errors) {
        Map<String, String> errorMap = new HashMap<>();
        Map<String, Object> map = new HashMap<String, Object>();

        errors.forEach((fieldName, errorMessage) -> {
            errorMap.put(fieldName, errorMessage);
        });

        map.put("status", status);
        map.put("message", message);
        map.put("errors", errorMap);

        return new ResponseEntity<Object>(map, status);
    }
}
