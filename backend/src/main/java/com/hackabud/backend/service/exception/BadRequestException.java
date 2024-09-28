package com.hackabud.backend.service.exception;

public class BadRequestException extends Exception {

    public BadRequestException() {
        super();
    }

    public BadRequestException(String string) {
        super(string);
    }

    public BadRequestException(String string, Throwable throwable) {
        super(string, throwable);
    }

    public BadRequestException(Throwable throwable) {
        super(throwable);
    }
    
}
