package com.reactnativemodule.androidmodule;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CalendarModule extends ReactContextBaseJavaModule {
    public CalendarModule(ReactApplicationContext context) {
        super(context);
    }

    // add to CalendarModule.java
    @NonNull
    @Override
    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location, Callback callBack) {
        Log.d(
                "CalendarModule",
                "Create event called with name: " + name
                        + " and location: " + location);

        Integer eventId = 420;
        callBack.invoke(eventId);
    }
}