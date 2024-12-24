let value: string | number = "hello";

let status: "enable" | "disable" = "enable";

value = "Hello";
if (typeof value === "string") {
  console.log("value is a string:", value);
} else if (typeof value === "number") {
  console.log("value is a number:", value);
}

status = "enable";
if (status === "enable") {
  console.log("Status is enabled");
} else if (status === "disable") {
  console.log("Status is disabled");
}
