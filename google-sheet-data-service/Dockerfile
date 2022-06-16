FROM maven:3.8.6-jdk-11 AS MAVEN_BUILD

MAINTAINER Innovation Hub

COPY pom.xml /build/
COPY src /build/src/

WORKDIR /build/
RUN mvn package

FROM openjdk:17

WORKDIR /app

COPY --from=MAVEN_BUILD /build/target/google-sheet-data-service-0.0.1-SNAPSHOT.jar /app/

ENTRYPOINT ["java", "-jar", "google-sheet-data-service-0.0.1-SNAPSHOT.jar"]