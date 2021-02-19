# error vs. warning

Always use `error` for enabled rules, never `warning`.
If the rule is too strict in some cases, violations should be addressed where
they occur instead of spamming the lint output.
