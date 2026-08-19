---
doc_id: "apex_doc_examples"
---

# ApexDoc Examples

See practical examples of ApexDoc comments applied to various Apex constructs.

## Class Example

```apex
/**
 * Manages customer account information and related operations.
 * This class bypasses user record access via 'without sharing' so that it 
 * can be used in a batch classes.
 * @author John Developer
 * @since 0.1.0
 * @version 0.3.1
 * @see AccountProcessingBatch
 * @group Account
 * @example
 * {@code
 * Account a;
 * try {
 *  a = new AccountManager().createAccount('Acme', 'Agriculture');
 * } catch (AccountManager.AccountException caught) {
 *   LOGGER.log(caught);
 *   // further exception handling
 * }
 * }
 */
public without sharing class AccountManager {

    /**
     * The default region for new accounts if not specified.
     */
    public static final String DEFAULT_REGION = 'North America';

    /**
     * Stores the count of active accounts managed by this instance.
     * Populated after using the {@link AccountService}.
     */
    @TestVisible
    private Integer activeAccountCount;

    /**
     * Creates a new Account sObject with the given name and industry.
     * @param accountName The desired name for the new account. Cannot be null or empty.
     * @param industry The industry classification for the new account.
     * @return The newly created Account sObject with its ID populated.
     * @throws AccountManager.AccountException if accountName is invalid
     * or if DML operation fails.
     */
    public Account createAccount(String accountName, String industry) {
        if (String.isBlank(accountName)) {
            throw new AccountManager.AccountException('Account name cannot be blank.');
        }
        Account acc = new Account(Name = accountName, Industry = industry);
        // Potentially more logic here
        try {
            insert acc;
        } catch (DmlException e) {
            throw new AccountManager.AccountException(
                'Failed to create account: ' + e.getMessage()
            );
        }
        return acc;
    }

    // more methods...

    /**
     * Represents an exception specific to AccountManager operations.
     * @example
     * {@code
     * throw new AccountManager.AccountException('Account not found with provided Id.');
     * }
     */
    public class AccountException extends Exception {}
}
```

## Packaged Class Example

```apex
/**
 * Provides services for geolocation and address conversion.
 * @author Dennis Smith
 * @version 0.3.0
 * @since 0.1.0
 */
global with sharing class GeolocationService {
  /**
   * Represents geographic coordinates (latitude and longitude).
   */
  global class Coordinates {
    @AuraEnabled
    public Decimal latitude;
    @AuraEnabled
    public Decimal longitude;

    global Coordinates(Decimal lat, Decimal lon) {
      this.latitude = lat;
      this.longitude = lon;
    }
  }

  /**
   * Converts a full address string to approximate latitude
   * and longitude coordinates. This method is deprecated and should no
   * longer be used due to its reliance on an older, less accurate geocoding 
   * service and simpler parsing logic. It may not handle all address formats
   * correctly and has a lower success rate.
   * @param fullAddress The complete address string
   * (e.g., "123 Main St, Anytown, CA 90210, USA").
   * @return A `Coordinates` object representing the approximate latitude and longitude.
   * @throws DeprecatedMethodCalledException If this method is invoked,
   * informing the user to migrate to the newer, more robust `geocodeAddress` method.
   * @deprecated in 0.2.0. Use {@link #geocodeAddress(
   * String street,
   * String city,
   * String state,
   * String postalCode,
   * String country)} instead.
   * @since 0.1.0
   */
  @Deprecated
  global static Coordinates convertAddressToCoordinates(String fullAddress) {
    throw new DeprecatedMethodCalledException(
      'The method `GeolocationService.convertAddressToCoordinates(String fullAddress)` is deprecated. ' +
        'Please use `GeolocationService.geocodeAddress(String street, String city, String state, String postalCode, String country)` ' +
        'for all new and existing address-to-coordinate conversions to ensure better accuracy and reliability.'
    );
  }

  /**
   * Geocodes a structured address into precise latitude and longitude coordinates
   * using a robust external geocoding service.
   * This method provides higher accuracy and better handling of diverse address formats.
   * @param street The street address (e.g., "123 Main St").
   * @param city The city (e.g., "Anytown").
   * @param state The state or province abbreviation (e.g., "CA").
   * @param postalCode The postal or ZIP code (e.g., "90210").
   * @param country The country name or code (e.g., "USA").
   * @return A Coordinates object containing the latitude and longitude.
   * @throws GeocodingException If the address cannot be geocoded, 
   * if the external service is unavailable, or if required address
   * components are missing.
   * @example
   * {@code
   * try {
   *   GeolocationService.Coordinates coords = GeolocationService.geocodeAddress(
   *     '415 Mission St',
   *     'San Francisco',
   *     'CA',
   *     '94105',
   *     'USA'
   *   );
   * } catch (GeolocationService.GeocodingException e) {
   *   // handle failure
   * }
   * }
   * @since 0.2.0
   */
  global static Coordinates geocodeAddress(
    String street,
    String city,
    String state,
    String postalCode,
    String country
  ) {
    // Implement actual geocoding logic
    return new Coordinates(0, 0);
  }

  /**
   * Exception thrown when a deprecated method is called.
   * This indicates that the caller should migrate to the recommended alternative.
   */
  global class DeprecatedMethodCalledException extends Exception {
  }

  /**
   * Exception thrown when a geocoding operation fails.
   * This provides specific context for issues during address-to-coordinate conversion.
   */
  global class GeocodingException extends Exception {
  }
}
```

## Test Class Example

```apex
/**
 * Specifications for the GeolocationService
 * @author Jane Devington
 * @version 0.2.0
 * @see GeolocationService
 * @since 0.1.0
 */
@IsTest
private class GeolocationServiceTest {
  /**
   * Verifies that known addresses are correctly geocoded to their expected coordinates.
   * @see GeolocationService#geocodeAddress(
   * String street,
   * String city,
   * String state,
   * String postalCode,
   * String country)
   */
  @IsTest
  private static void validAddressShouldReturnCorrectCoordinates() {
    String street = '415 Mission Street';
    String city = 'San Francisco';
    String state = 'CA';
    String postalCode = '94105';
    String country = 'USA';

    GeolocationService.Coordinates coords;
    Test.startTest();
    coords = GeolocationService.geocodeAddress(
      street,
      city,
      state,
      postalCode,
      country
    );
    Test.stopTest();

    Assert.isNotNull(
      coords,
      'Coordinates should not be null for a valid address.'
    );
    Assert.areEqual(
      37.785834,
      coords.latitude,
      'Latitude should match for Salesforce tower.'
    );
    Assert.areEqual(
      -122.406417,
      coords.longitude,
      'Longitude should match for Salesforce tower.'
    );
  }

  /**
   * Verifies that calling the geocodeAddress with missing required parameters
   * throws a GeocodingException.
   * @see GeolocationService#geocodeAddress(
   * String street,
   * String city,
   * String state,
   * String postalCode,
   * String country)
   * @see GeolocationService#GeocodingException
   */
  @IsTest
  private static void missingRequiredParametersShouldThrowGeocodingException() {
    String street = ''; // Missing
    String city = 'San Francisco';
    String state = 'CA';
    String postalCode = 94105;
    String country = 'USA';

    Test.startTest();
    Boolean caughtException = false;
    try {
      GeolocationService.geocodeAddress(
        street,
        city,
        state,
        postalCode,
        country
      );
    } catch (GeolocationService.GeocodingException e) {
      caughtException = true;
      Assert.areEqual(
        'Street, City, and Postal Code are required for geocoding.',
        e.getMessage(),
        'Exception message should indicate missing required fields.'
      );
    }
    Test.stopTest();

    Assert.isTrue(
      caughtException,
      'GeocodingException should have been thrown for missing street.'
    );
  }

  /**
   * Verifies that calling the deprecated method throws a
   * DeprecatedMethodCalledException.
   * @see GeolocationService#convertAddressToCoordinates(String address)
   * @see GeolocationService#DeprecatedMethodCalledException
   */
  @IsTest
  private static void deprecatedMethodCallShouldThrowDeprecatedMethodCalledException() {
    String oldAddress = '123 Deprecated Lane';

    Test.startTest();
    Boolean caughtException = false;
    try {
      GeolocationService.convertAddressToCoordinates(
        oldAddress
      );
    } catch (GeolocationService.DeprecatedMethodCalledException e) {
      caughtException = true;
      Assert.isTrue(
        e.getMessage().contains('is deprecated'),
        'Exception message should indicate deprecation.'
      );
      Assert.isTrue(
        e.getMessage().contains('Please use'),
        'Exception message should suggest new method.'
      );
    }
    Test.stopTest();

    Assert.isTrue(
      caughtException,
      'DeprecatedMethodCalledException should have been thrown.'
    );
  }
}
```

## Interface Example

```apex
/**
 * Defines a contract for objects that can be serialized to a 
 * specific format. Implementations must provide logic for converting
 * their state into a string representation.
 * @author Jane Coder
 * @since 0.2.0
 */
public interface ISerializable {
    /**
     * Serializes the object's current state into a String.
     * @return A String representation of the object.
     * @throws SerializationException if the object cannot be serialized.
     */
    String serialize();

    /**
     * Gets the format name this serializer supports (e.g., "JSON", "XML").
     * @return The name of the serialization format.
     */
    String getFormatName();
}
```

## Enum Example

```apex
/**
 * Represents the possible status levels for a support case.
 * Defines standard values for case progression in the customer portal. 
 * @author John Developer
 * @since 0.1.5
 */
public enum CaseStatus {
  /* A newly opened case, not yet assigned. */
  BRAND_NEW,
  /* Case is actively being worked on. */
  WORKING,
  /* Case has been escalated to a higher tier. */
  ESCALATED,
  /* Case has been resolved and closed. */
  CLOSED
}
```

## Method Example (with params, return, throws)

```apex
/**
 * Calculates the total price for a list of products, applying a discount.
 * @param productCodes A List of unique product codes to calculate the price for.
 * Each code must correspond to an existing Product2 record.
 * @param discountPercentage The discount percentage to apply (e.g., 10.5 for 10.5%).
 * Must be between 0.0 and 100.0.
 * @return The calculated total price as a Decimal after applying the discount.
 * Returns 0.0 if productCodes is null or empty.
 * @throws InvalidArgumentException if discountPercentage is out of range.
 * @throws ProductNotFoundException if any productCode does not match an
 * existing product.
 */
public Decimal calculateTotalPrice(
  ListString> productCodes,
  Decimal discountPercentage
) {
    if (discountPercentage  100.0) {
        throw new IllegalArgumentException(
          'Discount percentage must be between 0.0 and 100.0.'
        );
    }
    if (productCodes == null || productCodes.isEmpty()) {
        return 0.0;
    }
    //... implementation logic to fetch prices and calculate total...
    return 100.0;
}

/**
 * Represents an exception thrown when a requested product cannot be found.
 * This custom exception provides a clear indication that a product lookup failed,
 * allowing calling code to handle the 'not found' scenario specifically.
 * It is typically thrown by methods attempting to retrieve Product2 records.
 * @example
 * {@code
 * List products = [
 *   SELECT Id
 *   FROM Product2
 *   WHERE ProductCode = :productCode
 *   LIMIT 1
 * ];
 * if (products.isEmpty()) {
 *   throw new ProductNotFoundException(
 *    'Product with code ' + productCode + ' not found.'
 *  );
 * }
 * }
 */
public class ProductNotFoundException extends Exception {}
```

## Annotated Method (@AuraEnabled) Example

```apex
public class OpportunityService {
    /**
     * Retrieves a list of open opportunities for a given account,
     * accessible from Lightning Web Components. If the set of open opportunities
     * can change during interaction with the component, the author will 
     * need to use {@code refreshApex()}. 
     * @param accountId The ID of the Account to retrieve opportunities for.
     * @return A List of open Opportunity records. Returns an empty list if no
     * open opportunities are found or if accountId is invalid.
     * @see OpportunitySelector
     */
    @AuraEnabled(cacheable=true)
    public static List getOpenOpportunities(Id accountId) {
        List result = new List();
        //... implementation details...
        return result;
    }
}
```

## External Reference Example

```apex
/**
 * Provides a service to retrieve current weather conditions from an external API.
 * It utilizes Salesforce Named Credentials for secure endpoint and
 * authentication management.
 * @author John Doe
 * @since 1.0.3
 */
public with sharing class WeatherService {
  /**
   * Retrieves the current weather conditions for a specified city and country.
   * This method makes an HTTP GET callout to an external weather API using a
   * Named Credential.
   * @param city The name of the city (e.g., "London").
   * @param country The name or code of the country (e.g., "UK" or "United Kingdom").
   * @return A JSON string representing the current weather conditions.
   * @throws WeatherServiceException If the HTTP callout fails, returns a non-200 status,
   * or if there's an issue parsing the response.
   * @see External 
   * Weather API
   */
  public static String getCurrentWeather(
    String city,
    String country
  ) {
    if (String.isBlank(city) || String.isBlank(country)) {
      throw new WeatherServiceException(
        'City and country cannot be blank for weather lookup.'
      );
    }

    String namedCredentialUrl = 'callout:WeatherAPI/current'; 
    String requestParams =
      '?city=' +
      EncodingUtil.urlEncode(city, 'UTF-8') +
      '&country=' +
      EncodingUtil.urlEncode(country, 'UTF-8');

    HttpRequest req = new HttpRequest();
    req.setEndpoint(namedCredentialUrl + requestParams);
    req.setMethod('GET');
    req.setTimeout(60000);

    Http http = new Http();
    HttpResponse res;

    try {
      res = http.send(req);
    } catch (System.CalloutException e) {
      throw new WeatherServiceException(
        'HTTP Callout Failed: ' + e.getMessage()
      );
    }

    if (res.getStatusCode() == 200) {
      return res.getBody();
    } else {
      throw new WeatherServiceException(
        'Failed to retrieve weather data. Status: ' +
          res.getStatusCode() +
          '. Details: ' +
          res.getBody()
      );
    }
  }

  /**
   * Custom exception for errors during weather data retrieval.
   */
  public class WeatherServiceException extends Exception {
  }
}
```

## Inline Tags Example

```apex
/**
 * Sanitizes a given input string by removing or replacing certain
 * characters such as {@code }
 * @param inputString The raw string provided by a user or external source. 
 * This string might contain malicious or unexpected characters,
 * like a {@literal } tag or a backslash {@literal \}.
 * @return The sanitized string after processing.
 * @example
 * {@code
 * String badInput = 'Hello, alert(\'xss\') World!';
 * String safeOutput = SecurityUtils.sanitizeInput(badInput);
 * System.debug('Sanitized Output: ' + safeOutput);
 * } * @see {@link String#escapeHtml4} for a similar built-in method.
 * {@hidden NOTE TO MAINTAINERS: This method should be updated if
 * new security threats are identified. The current regex
 * is designed to handle common XSS patterns but may not
 * be exhaustive. The last major update was in v2.1.}
 * @since 2.0
 */
global static String sanitizeInput(String inputString) {
  // simple example for demonstration purposes
  String sanitized = inputString;
  sanitized = sanitized.replace('', '').replace('', '');
  sanitized = sanitized.replace('&#40;','(').replace('&#41;',')');
  return sanitized;
}
```

## See Also

- [ApexDoc Comment Structure and Tags](atlas.en-us.apexcode.meta/apexcode/apex_doc_format.htm)

-   [Document Apex Constructs and Features](atlas.en-us.apexcode.meta/apexcode/apex_doc_constructs.htm "Apex has unique constructs and platform-specific features that require particular attention in documentation. Use these guidelines to document these elements with ApexDoc.")
