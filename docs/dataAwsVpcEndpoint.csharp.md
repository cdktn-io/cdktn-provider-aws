# `dataAwsVpcEndpoint` Submodule <a name="`dataAwsVpcEndpoint` Submodule" id="@cdktn/provider-aws.dataAwsVpcEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcEndpoint <a name="DataAwsVpcEndpoint" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/vpc_endpoint aws_vpc_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsVpcEndpoint(Construct Scope, string Id, DataAwsVpcEndpointConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig">DataAwsVpcEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig">DataAwsVpcEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetServiceRegion">ResetServiceRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetVpcEndpointType">ResetVpcEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.putFilter"></a>

```csharp
private void PutFilter(IResolvable|DataAwsVpcEndpointFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.putFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter">DataAwsVpcEndpointFilter</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAwsVpcEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeouts">DataAwsVpcEndpointTimeouts</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetServiceName"></a>

```csharp
private void ResetServiceName()
```

##### `ResetServiceRegion` <a name="ResetServiceRegion" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetServiceRegion"></a>

```csharp
private void ResetServiceRegion()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVpcEndpointType` <a name="ResetVpcEndpointType" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetVpcEndpointType"></a>

```csharp
private void ResetVpcEndpointType()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.resetVpcId"></a>

```csharp
private void ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsVpcEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsVpcEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsVpcEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsVpcEndpoint.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsVpcEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsVpcEndpoint resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsVpcEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsVpcEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/vpc_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsVpcEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.cidrBlocks">CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.dnsEntry">DnsEntry</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList">DataAwsVpcEndpointDnsEntryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.dnsOptions">DnsOptions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList">DataAwsVpcEndpointDnsOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList">DataAwsVpcEndpointFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.prefixListId">PrefixListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.privateDnsEnabled">PrivateDnsEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.requesterManaged">RequesterManaged</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.routeTableIds">RouteTableIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference">DataAwsVpcEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter">DataAwsVpcEndpointFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.serviceRegionInput">ServiceRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeouts">DataAwsVpcEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.vpcEndpointTypeInput">VpcEndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.serviceRegion">ServiceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.vpcEndpointType">VpcEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CidrBlocks`<sup>Required</sup> <a name="CidrBlocks" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.cidrBlocks"></a>

```csharp
public string[] CidrBlocks { get; }
```

- *Type:* string[]

---

##### `DnsEntry`<sup>Required</sup> <a name="DnsEntry" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.dnsEntry"></a>

```csharp
public DataAwsVpcEndpointDnsEntryList DnsEntry { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList">DataAwsVpcEndpointDnsEntryList</a>

---

##### `DnsOptions`<sup>Required</sup> <a name="DnsOptions" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.dnsOptions"></a>

```csharp
public DataAwsVpcEndpointDnsOptionsList DnsOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList">DataAwsVpcEndpointDnsOptionsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.filter"></a>

```csharp
public DataAwsVpcEndpointFilterList Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList">DataAwsVpcEndpointFilterList</a>

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `NetworkInterfaceIds`<sup>Required</sup> <a name="NetworkInterfaceIds" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.networkInterfaceIds"></a>

```csharp
public string[] NetworkInterfaceIds { get; }
```

- *Type:* string[]

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `PrefixListId`<sup>Required</sup> <a name="PrefixListId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.prefixListId"></a>

```csharp
public string PrefixListId { get; }
```

- *Type:* string

---

##### `PrivateDnsEnabled`<sup>Required</sup> <a name="PrivateDnsEnabled" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.privateDnsEnabled"></a>

```csharp
public IResolvable PrivateDnsEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RequesterManaged`<sup>Required</sup> <a name="RequesterManaged" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.requesterManaged"></a>

```csharp
public IResolvable RequesterManaged { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RouteTableIds`<sup>Required</sup> <a name="RouteTableIds" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.routeTableIds"></a>

```csharp
public string[] RouteTableIds { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.timeouts"></a>

```csharp
public DataAwsVpcEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference">DataAwsVpcEndpointTimeoutsOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.filterInput"></a>

```csharp
public IResolvable|DataAwsVpcEndpointFilter[] FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter">DataAwsVpcEndpointFilter</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `ServiceRegionInput`<sup>Optional</sup> <a name="ServiceRegionInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.serviceRegionInput"></a>

```csharp
public string ServiceRegionInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAwsVpcEndpointTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeouts">DataAwsVpcEndpointTimeouts</a>

---

##### `VpcEndpointTypeInput`<sup>Optional</sup> <a name="VpcEndpointTypeInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.vpcEndpointTypeInput"></a>

```csharp
public string VpcEndpointTypeInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `ServiceRegion`<sup>Required</sup> <a name="ServiceRegion" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.serviceRegion"></a>

```csharp
public string ServiceRegion { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcEndpointType`<sup>Required</sup> <a name="VpcEndpointType" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.vpcEndpointType"></a>

```csharp
public string VpcEndpointType { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcEndpointConfig <a name="DataAwsVpcEndpointConfig" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsVpcEndpointConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|DataAwsVpcEndpointFilter[] Filter = null,
    string Id = null,
    string Region = null,
    string ServiceName = null,
    string ServiceRegion = null,
    string State = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    DataAwsVpcEndpointTimeouts Timeouts = null,
    string VpcEndpointType = null,
    string VpcId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.filter">Filter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter">DataAwsVpcEndpointFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/vpc_endpoint#id DataAwsVpcEndpoint#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.serviceName">ServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/vpc_endpoint#service_name DataAwsVpcEndpoint#service_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.serviceRegion">ServiceRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/vpc_endpoint#service_region DataAwsVpcEndpoint#service_region}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/vpc_endpoint#state DataAwsVpcEndpoint#state}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/vpc_endpoint#tags DataAwsVpcEndpoint#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeouts">DataAwsVpcEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.vpcEndpointType">VpcEndpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/vpc_endpoint#vpc_endpoint_type DataAwsVpcEndpoint#vpc_endpoint_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/vpc_endpoint#vpc_id DataAwsVpcEndpoint#vpc_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.filter"></a>

```csharp
public IResolvable|DataAwsVpcEndpointFilter[] Filter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter">DataAwsVpcEndpointFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/vpc_endpoint#filter DataAwsVpcEndpoint#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/vpc_endpoint#id DataAwsVpcEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/vpc_endpoint#region DataAwsVpcEndpoint#region}

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/vpc_endpoint#service_name DataAwsVpcEndpoint#service_name}.

---

##### `ServiceRegion`<sup>Optional</sup> <a name="ServiceRegion" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.serviceRegion"></a>

```csharp
public string ServiceRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/vpc_endpoint#service_region DataAwsVpcEndpoint#service_region}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/vpc_endpoint#state DataAwsVpcEndpoint#state}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/vpc_endpoint#tags DataAwsVpcEndpoint#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.timeouts"></a>

```csharp
public DataAwsVpcEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeouts">DataAwsVpcEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/vpc_endpoint#timeouts DataAwsVpcEndpoint#timeouts}

---

##### `VpcEndpointType`<sup>Optional</sup> <a name="VpcEndpointType" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.vpcEndpointType"></a>

```csharp
public string VpcEndpointType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/vpc_endpoint#vpc_endpoint_type DataAwsVpcEndpoint#vpc_endpoint_type}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/vpc_endpoint#vpc_id DataAwsVpcEndpoint#vpc_id}.

---

### DataAwsVpcEndpointDnsEntry <a name="DataAwsVpcEndpointDnsEntry" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsVpcEndpointDnsEntry {

};
```


### DataAwsVpcEndpointDnsOptions <a name="DataAwsVpcEndpointDnsOptions" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsVpcEndpointDnsOptions {

};
```


### DataAwsVpcEndpointFilter <a name="DataAwsVpcEndpointFilter" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsVpcEndpointFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/vpc_endpoint#name DataAwsVpcEndpoint#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/vpc_endpoint#values DataAwsVpcEndpoint#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/vpc_endpoint#name DataAwsVpcEndpoint#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/vpc_endpoint#values DataAwsVpcEndpoint#values}.

---

### DataAwsVpcEndpointTimeouts <a name="DataAwsVpcEndpointTimeouts" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsVpcEndpointTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/vpc_endpoint#read DataAwsVpcEndpoint#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/vpc_endpoint#read DataAwsVpcEndpoint#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpcEndpointDnsEntryList <a name="DataAwsVpcEndpointDnsEntryList" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsVpcEndpointDnsEntryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.get"></a>

```csharp
private DataAwsVpcEndpointDnsEntryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsVpcEndpointDnsEntryOutputReference <a name="DataAwsVpcEndpointDnsEntryOutputReference" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsVpcEndpointDnsEntryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntry">DataAwsVpcEndpointDnsEntry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntryOutputReference.property.internalValue"></a>

```csharp
public DataAwsVpcEndpointDnsEntry InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsEntry">DataAwsVpcEndpointDnsEntry</a>

---


### DataAwsVpcEndpointDnsOptionsList <a name="DataAwsVpcEndpointDnsOptionsList" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsVpcEndpointDnsOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.get"></a>

```csharp
private DataAwsVpcEndpointDnsOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsVpcEndpointDnsOptionsOutputReference <a name="DataAwsVpcEndpointDnsOptionsOutputReference" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsVpcEndpointDnsOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.dnsRecordIpType">DnsRecordIpType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpoint">PrivateDnsOnlyForInboundResolverEndpoint</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.privateDnsPreference">PrivateDnsPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.privateDnsSpecifiedDomains">PrivateDnsSpecifiedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptions">DataAwsVpcEndpointDnsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsRecordIpType`<sup>Required</sup> <a name="DnsRecordIpType" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.dnsRecordIpType"></a>

```csharp
public string DnsRecordIpType { get; }
```

- *Type:* string

---

##### `PrivateDnsOnlyForInboundResolverEndpoint`<sup>Required</sup> <a name="PrivateDnsOnlyForInboundResolverEndpoint" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.privateDnsOnlyForInboundResolverEndpoint"></a>

```csharp
public IResolvable PrivateDnsOnlyForInboundResolverEndpoint { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `PrivateDnsPreference`<sup>Required</sup> <a name="PrivateDnsPreference" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.privateDnsPreference"></a>

```csharp
public string PrivateDnsPreference { get; }
```

- *Type:* string

---

##### `PrivateDnsSpecifiedDomains`<sup>Required</sup> <a name="PrivateDnsSpecifiedDomains" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.privateDnsSpecifiedDomains"></a>

```csharp
public string[] PrivateDnsSpecifiedDomains { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsVpcEndpointDnsOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointDnsOptions">DataAwsVpcEndpointDnsOptions</a>

---


### DataAwsVpcEndpointFilterList <a name="DataAwsVpcEndpointFilterList" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsVpcEndpointFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.get"></a>

```csharp
private DataAwsVpcEndpointFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter">DataAwsVpcEndpointFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsVpcEndpointFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter">DataAwsVpcEndpointFilter</a>[]

---


### DataAwsVpcEndpointFilterOutputReference <a name="DataAwsVpcEndpointFilterOutputReference" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsVpcEndpointFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter">DataAwsVpcEndpointFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsVpcEndpointFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointFilter">DataAwsVpcEndpointFilter</a>

---


### DataAwsVpcEndpointTimeoutsOutputReference <a name="DataAwsVpcEndpointTimeoutsOutputReference" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsVpcEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeouts">DataAwsVpcEndpointTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsVpcEndpointTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsVpcEndpoint.DataAwsVpcEndpointTimeouts">DataAwsVpcEndpointTimeouts</a>

---



