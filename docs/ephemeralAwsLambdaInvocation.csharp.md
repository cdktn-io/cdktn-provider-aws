# `ephemeralAwsLambdaInvocation` Submodule <a name="`ephemeralAwsLambdaInvocation` Submodule" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsLambdaInvocation <a name="EphemeralAwsLambdaInvocation" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/lambda_invocation aws_lambda_invocation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EphemeralAwsLambdaInvocation(Construct Scope, string Id, EphemeralAwsLambdaInvocationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig">EphemeralAwsLambdaInvocationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig">EphemeralAwsLambdaInvocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetClientContext">ResetClientContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetLogType">ResetLogType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetQualifier">ResetQualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetClientContext` <a name="ResetClientContext" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetClientContext"></a>

```csharp
private void ResetClientContext()
```

##### `ResetLogType` <a name="ResetLogType" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetLogType"></a>

```csharp
private void ResetLogType()
```

##### `ResetQualifier` <a name="ResetQualifier" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetQualifier"></a>

```csharp
private void ResetQualifier()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EphemeralAwsLambdaInvocation.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EphemeralAwsLambdaInvocation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

EphemeralAwsLambdaInvocation.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.executedVersion">ExecutedVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.functionError">FunctionError</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.logResult">LogResult</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.result">Result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.statusCode">StatusCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.clientContextInput">ClientContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.functionNameInput">FunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.logTypeInput">LogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.payloadInput">PayloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.qualifierInput">QualifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.clientContext">ClientContext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.logType">LogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.payload">Payload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.qualifier">Qualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ExecutedVersion`<sup>Required</sup> <a name="ExecutedVersion" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.executedVersion"></a>

```csharp
public string ExecutedVersion { get; }
```

- *Type:* string

---

##### `FunctionError`<sup>Required</sup> <a name="FunctionError" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.functionError"></a>

```csharp
public string FunctionError { get; }
```

- *Type:* string

---

##### `LogResult`<sup>Required</sup> <a name="LogResult" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.logResult"></a>

```csharp
public string LogResult { get; }
```

- *Type:* string

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.result"></a>

```csharp
public string Result { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.statusCode"></a>

```csharp
public double StatusCode { get; }
```

- *Type:* double

---

##### `ClientContextInput`<sup>Optional</sup> <a name="ClientContextInput" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.clientContextInput"></a>

```csharp
public string ClientContextInput { get; }
```

- *Type:* string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.functionNameInput"></a>

```csharp
public string FunctionNameInput { get; }
```

- *Type:* string

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.logTypeInput"></a>

```csharp
public string LogTypeInput { get; }
```

- *Type:* string

---

##### `PayloadInput`<sup>Optional</sup> <a name="PayloadInput" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.payloadInput"></a>

```csharp
public string PayloadInput { get; }
```

- *Type:* string

---

##### `QualifierInput`<sup>Optional</sup> <a name="QualifierInput" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.qualifierInput"></a>

```csharp
public string QualifierInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ClientContext`<sup>Required</sup> <a name="ClientContext" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.clientContext"></a>

```csharp
public string ClientContext { get; }
```

- *Type:* string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.logType"></a>

```csharp
public string LogType { get; }
```

- *Type:* string

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.payload"></a>

```csharp
public string Payload { get; }
```

- *Type:* string

---

##### `Qualifier`<sup>Required</sup> <a name="Qualifier" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.qualifier"></a>

```csharp
public string Qualifier { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsLambdaInvocationConfig <a name="EphemeralAwsLambdaInvocationConfig" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new EphemeralAwsLambdaInvocationConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string FunctionName,
    string Payload,
    string ClientContext = null,
    string LogType = null,
    string Qualifier = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.functionName">FunctionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/lambda_invocation#function_name EphemeralAwsLambdaInvocation#function_name}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.payload">Payload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/lambda_invocation#payload EphemeralAwsLambdaInvocation#payload}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.clientContext">ClientContext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/lambda_invocation#client_context EphemeralAwsLambdaInvocation#client_context}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.logType">LogType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/lambda_invocation#log_type EphemeralAwsLambdaInvocation#log_type}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.qualifier">Qualifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/lambda_invocation#qualifier EphemeralAwsLambdaInvocation#qualifier}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.functionName"></a>

```csharp
public string FunctionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/lambda_invocation#function_name EphemeralAwsLambdaInvocation#function_name}.

---

##### `Payload`<sup>Required</sup> <a name="Payload" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.payload"></a>

```csharp
public string Payload { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/lambda_invocation#payload EphemeralAwsLambdaInvocation#payload}.

---

##### `ClientContext`<sup>Optional</sup> <a name="ClientContext" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.clientContext"></a>

```csharp
public string ClientContext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/lambda_invocation#client_context EphemeralAwsLambdaInvocation#client_context}.

---

##### `LogType`<sup>Optional</sup> <a name="LogType" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.logType"></a>

```csharp
public string LogType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/lambda_invocation#log_type EphemeralAwsLambdaInvocation#log_type}.

---

##### `Qualifier`<sup>Optional</sup> <a name="Qualifier" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.qualifier"></a>

```csharp
public string Qualifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/lambda_invocation#qualifier EphemeralAwsLambdaInvocation#qualifier}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ephemeralAwsLambdaInvocation.EphemeralAwsLambdaInvocationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/lambda_invocation#region EphemeralAwsLambdaInvocation#region}

---



