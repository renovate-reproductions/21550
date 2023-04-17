## What's in the reproduction?

It contains `angular/core` which is locked at `14.0.1.` based on the package rules I would expect it to be renovated to version `14.3.0`.
When I regenerate the package-lock with npm 7 and packagelockVersion 2 then the pull request is created as expected and I can see the the lockedVersion was resolved.

I compared the debug logs when using lockfileVersion 2 and 3 and the only difference seems to be it cannot read the lockedVersion of the dependency because in the debug logs i see that "lockedVersion" seems to be null (see attached log).
When using lockfileVersion 2 this is set to the version in package-lock.

## Wanted end result.

When using a package-lock with lockfileVersion 3 Renovate does not create merge request.
It should work the same way as it does with lockfileVersion 2.
