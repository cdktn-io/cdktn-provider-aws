# `dataAwsEc2LocalGatewayVirtualInterface` Submodule <a name="`dataAwsEc2LocalGatewayVirtualInterface` Submodule" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2LocalGatewayVirtualInterface <a name="DataAwsEc2LocalGatewayVirtualInterface" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/ec2_local_gateway_virtual_interface aws_ec2_local_gateway_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2LocalGatewayVirtualInterface(Construct Scope, string Id, DataAwsEc2LocalGatewayVirtualInterfaceConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig">DataAwsEc2LocalGatewayVirtualInterfaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig">DataAwsEc2LocalGatewayVirtualInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.putFilter"></a>

```csharp
private void PutFilter(IResolvable|DataAwsEc2LocalGatewayVirtualInterfaceFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.putFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAwsEc2LocalGatewayVirtualInterfaceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceTimeouts</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsEc2LocalGatewayVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2LocalGatewayVirtualInterface.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2LocalGatewayVirtualInterface.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2LocalGatewayVirtualInterface.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2LocalGatewayVirtualInterface.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsEc2LocalGatewayVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEc2LocalGatewayVirtualInterface to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEc2LocalGatewayVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/ec2_local_gateway_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEc2LocalGatewayVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList">DataAwsEc2LocalGatewayVirtualInterfaceFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localAddress">LocalAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localBgpAsn">LocalBgpAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localGatewayId">LocalGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceGroupId">LocalGatewayVirtualInterfaceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceIds">LocalGatewayVirtualInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.outpostLagId">OutpostLagId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.peerAddress">PeerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.peerBgpAsn">PeerBgpAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference">DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.vlan">Vlan</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.filter"></a>

```csharp
public DataAwsEc2LocalGatewayVirtualInterfaceFilterList Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList">DataAwsEc2LocalGatewayVirtualInterfaceFilterList</a>

---

##### `LocalAddress`<sup>Required</sup> <a name="LocalAddress" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localAddress"></a>

```csharp
public string LocalAddress { get; }
```

- *Type:* string

---

##### `LocalBgpAsn`<sup>Required</sup> <a name="LocalBgpAsn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localBgpAsn"></a>

```csharp
public double LocalBgpAsn { get; }
```

- *Type:* double

---

##### `LocalGatewayId`<sup>Required</sup> <a name="LocalGatewayId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localGatewayId"></a>

```csharp
public string LocalGatewayId { get; }
```

- *Type:* string

---

##### `LocalGatewayVirtualInterfaceGroupId`<sup>Required</sup> <a name="LocalGatewayVirtualInterfaceGroupId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceGroupId"></a>

```csharp
public string LocalGatewayVirtualInterfaceGroupId { get; }
```

- *Type:* string

---

##### `LocalGatewayVirtualInterfaceIds`<sup>Required</sup> <a name="LocalGatewayVirtualInterfaceIds" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceIds"></a>

```csharp
public string[] LocalGatewayVirtualInterfaceIds { get; }
```

- *Type:* string[]

---

##### `OutpostLagId`<sup>Required</sup> <a name="OutpostLagId" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.outpostLagId"></a>

```csharp
public string OutpostLagId { get; }
```

- *Type:* string

---

##### `PeerAddress`<sup>Required</sup> <a name="PeerAddress" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.peerAddress"></a>

```csharp
public string PeerAddress { get; }
```

- *Type:* string

---

##### `PeerBgpAsn`<sup>Required</sup> <a name="PeerBgpAsn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.peerBgpAsn"></a>

```csharp
public double PeerBgpAsn { get; }
```

- *Type:* double

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.timeouts"></a>

```csharp
public DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference">DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference</a>

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.vlan"></a>

```csharp
public double Vlan { get; }
```

- *Type:* double

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.filterInput"></a>

```csharp
public IResolvable|DataAwsEc2LocalGatewayVirtualInterfaceFilter[] FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAwsEc2LocalGatewayVirtualInterfaceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterface.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2LocalGatewayVirtualInterfaceConfig <a name="DataAwsEc2LocalGatewayVirtualInterfaceConfig" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2LocalGatewayVirtualInterfaceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|DataAwsEc2LocalGatewayVirtualInterfaceFilter[] Filter = null,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    DataAwsEc2LocalGatewayVirtualInterfaceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.filter">Filter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/ec2_local_gateway_virtual_interface#id DataAwsEc2LocalGatewayVirtualInterface#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/ec2_local_gateway_virtual_interface#tags DataAwsEc2LocalGatewayVirtualInterface#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.filter"></a>

```csharp
public IResolvable|DataAwsEc2LocalGatewayVirtualInterfaceFilter[] Filter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/ec2_local_gateway_virtual_interface#filter DataAwsEc2LocalGatewayVirtualInterface#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/ec2_local_gateway_virtual_interface#id DataAwsEc2LocalGatewayVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/ec2_local_gateway_virtual_interface#region DataAwsEc2LocalGatewayVirtualInterface#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/ec2_local_gateway_virtual_interface#tags DataAwsEc2LocalGatewayVirtualInterface#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceConfig.property.timeouts"></a>

```csharp
public DataAwsEc2LocalGatewayVirtualInterfaceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/ec2_local_gateway_virtual_interface#timeouts DataAwsEc2LocalGatewayVirtualInterface#timeouts}

---

### DataAwsEc2LocalGatewayVirtualInterfaceFilter <a name="DataAwsEc2LocalGatewayVirtualInterfaceFilter" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2LocalGatewayVirtualInterfaceFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/ec2_local_gateway_virtual_interface#name DataAwsEc2LocalGatewayVirtualInterface#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/ec2_local_gateway_virtual_interface#values DataAwsEc2LocalGatewayVirtualInterface#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/ec2_local_gateway_virtual_interface#name DataAwsEc2LocalGatewayVirtualInterface#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/ec2_local_gateway_virtual_interface#values DataAwsEc2LocalGatewayVirtualInterface#values}.

---

### DataAwsEc2LocalGatewayVirtualInterfaceTimeouts <a name="DataAwsEc2LocalGatewayVirtualInterfaceTimeouts" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2LocalGatewayVirtualInterfaceTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/ec2_local_gateway_virtual_interface#read DataAwsEc2LocalGatewayVirtualInterface#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/data-sources/ec2_local_gateway_virtual_interface#read DataAwsEc2LocalGatewayVirtualInterface#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2LocalGatewayVirtualInterfaceFilterList <a name="DataAwsEc2LocalGatewayVirtualInterfaceFilterList" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2LocalGatewayVirtualInterfaceFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.get"></a>

```csharp
private DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2LocalGatewayVirtualInterfaceFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a>[]

---


### DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference <a name="DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2LocalGatewayVirtualInterfaceFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceFilter">DataAwsEc2LocalGatewayVirtualInterfaceFilter</a>

---


### DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference <a name="DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2LocalGatewayVirtualInterfaceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2LocalGatewayVirtualInterface.DataAwsEc2LocalGatewayVirtualInterfaceTimeouts">DataAwsEc2LocalGatewayVirtualInterfaceTimeouts</a>

---



