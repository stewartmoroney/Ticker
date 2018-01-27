package com.sm.ticker.server.model;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;
import lombok.Builder;
import lombok.Value;

@Value
@Builder(toBuilder = true)
@JsonDeserialize(builder = User.UserImplBuilder.class)
public final class User {

    private String id;
    private String name;

    @JsonPOJOBuilder(withPrefix = "")
    public static final class UserImplBuilder {
        // Overwrite Lombok-generated builder class and methods with Jackson-annotated versions
    }
}
