package com.hackabud.backend.service.exception;

public class NotFoundException extends Exception {

    public NotFoundException() {
        super();
    }

    public NotFoundException(String string) {
        super(string);
    }

    public NotFoundException(String string, Throwable throwable) {
        super(string, throwable);
    }

    public NotFoundException(Throwable throwable) {
        super(throwable);
    }
    
}
