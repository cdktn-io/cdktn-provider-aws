# `dataAwsCognitoUserPoolClients` Submodule <a name="`dataAwsCognitoUserPoolClients` Submodule" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCognitoUserPoolClients <a name="DataAwsCognitoUserPoolClients" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/cognito_user_pool_clients aws_cognito_user_pool_clients}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCognitoUserPoolClients(Construct Scope, string Id, DataAwsCognitoUserPoolClientsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClientsConfig">DataAwsCognitoUserPoolClientsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClientsConfig">DataAwsCognitoUserPoolClientsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsCognitoUserPoolClients resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsCognitoUserPoolClients.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsCognitoUserPoolClients.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsCognitoUserPoolClients.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsCognitoUserPoolClients.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsCognitoUserPoolClients resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsCognitoUserPoolClients to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsCognitoUserPoolClients that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/cognito_user_pool_clients#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsCognitoUserPoolClients to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.clientIds">ClientIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.clientNames">ClientNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.userPoolId">UserPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ClientIds`<sup>Required</sup> <a name="ClientIds" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.clientIds"></a>

```csharp
public string[] ClientIds { get; }
```

- *Type:* string[]

---

##### `ClientNames`<sup>Required</sup> <a name="ClientNames" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.clientNames"></a>

```csharp
public string[] ClientNames { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.userPoolIdInput"></a>

```csharp
public string UserPoolIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.userPoolId"></a>

```csharp
public string UserPoolId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClients.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCognitoUserPoolClientsConfig <a name="DataAwsCognitoUserPoolClientsConfig" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClientsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClientsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsCognitoUserPoolClientsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string UserPoolId,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClientsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClientsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClientsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClientsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClientsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClientsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClientsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClientsConfig.property.userPoolId">UserPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/cognito_user_pool_clients#user_pool_id DataAwsCognitoUserPoolClients#user_pool_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClientsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/cognito_user_pool_clients#id DataAwsCognitoUserPoolClients#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClientsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClientsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClientsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClientsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClientsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClientsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClientsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClientsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClientsConfig.property.userPoolId"></a>

```csharp
public string UserPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/cognito_user_pool_clients#user_pool_id DataAwsCognitoUserPoolClients#user_pool_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClientsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/cognito_user_pool_clients#id DataAwsCognitoUserPoolClients#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsCognitoUserPoolClients.DataAwsCognitoUserPoolClientsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/data-sources/cognito_user_pool_clients#region DataAwsCognitoUserPoolClients#region}

---



