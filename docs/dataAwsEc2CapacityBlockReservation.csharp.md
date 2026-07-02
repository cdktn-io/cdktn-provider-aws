# `dataAwsEc2CapacityBlockReservation` Submodule <a name="`dataAwsEc2CapacityBlockReservation` Submodule" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2CapacityBlockReservation <a name="DataAwsEc2CapacityBlockReservation" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/ec2_capacity_block_reservation aws_ec2_capacity_block_reservation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2CapacityBlockReservation(Construct Scope, string Id, DataAwsEc2CapacityBlockReservationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig">DataAwsEc2CapacityBlockReservationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig">DataAwsEc2CapacityBlockReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.putFilter"></a>

```csharp
private void PutFilter(IResolvable|DataAwsEc2CapacityBlockReservationFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.putFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>[]

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsEc2CapacityBlockReservation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2CapacityBlockReservation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2CapacityBlockReservation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2CapacityBlockReservation.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2CapacityBlockReservation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsEc2CapacityBlockReservation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEc2CapacityBlockReservation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEc2CapacityBlockReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/ec2_capacity_block_reservation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEc2CapacityBlockReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.availableInstanceCount">AvailableInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.capacityBlockId">CapacityBlockId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.commitmentInfo">CommitmentInfo</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference">DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.deliveryPreference">DeliveryPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.ebsOptimized">EbsOptimized</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.endDateType">EndDateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList">DataAwsEc2CapacityBlockReservationFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.instanceMatchCriteria">InstanceMatchCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.instancePlatform">InstancePlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.interruptibleCapacityAllocation">InterruptibleCapacityAllocation</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference">DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.interruptionInfo">InterruptionInfo</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference">DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.outpostArn">OutpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.placementGroupArn">PlacementGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.reservationType">ReservationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.tenancy">Tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; }
```

- *Type:* string

---

##### `AvailableInstanceCount`<sup>Required</sup> <a name="AvailableInstanceCount" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.availableInstanceCount"></a>

```csharp
public double AvailableInstanceCount { get; }
```

- *Type:* double

---

##### `CapacityBlockId`<sup>Required</sup> <a name="CapacityBlockId" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.capacityBlockId"></a>

```csharp
public string CapacityBlockId { get; }
```

- *Type:* string

---

##### `CommitmentInfo`<sup>Required</sup> <a name="CommitmentInfo" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.commitmentInfo"></a>

```csharp
public DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference CommitmentInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference">DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference</a>

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `DeliveryPreference`<sup>Required</sup> <a name="DeliveryPreference" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.deliveryPreference"></a>

```csharp
public string DeliveryPreference { get; }
```

- *Type:* string

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.ebsOptimized"></a>

```csharp
public IResolvable EbsOptimized { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `EndDateType`<sup>Required</sup> <a name="EndDateType" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.endDateType"></a>

```csharp
public string EndDateType { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.filter"></a>

```csharp
public DataAwsEc2CapacityBlockReservationFilterList Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList">DataAwsEc2CapacityBlockReservationFilterList</a>

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `InstanceMatchCriteria`<sup>Required</sup> <a name="InstanceMatchCriteria" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.instanceMatchCriteria"></a>

```csharp
public string InstanceMatchCriteria { get; }
```

- *Type:* string

---

##### `InstancePlatform`<sup>Required</sup> <a name="InstancePlatform" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.instancePlatform"></a>

```csharp
public string InstancePlatform { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `InterruptibleCapacityAllocation`<sup>Required</sup> <a name="InterruptibleCapacityAllocation" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.interruptibleCapacityAllocation"></a>

```csharp
public DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference InterruptibleCapacityAllocation { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference">DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference</a>

---

##### `InterruptionInfo`<sup>Required</sup> <a name="InterruptionInfo" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.interruptionInfo"></a>

```csharp
public DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference InterruptionInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference">DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference</a>

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.outpostArn"></a>

```csharp
public string OutpostArn { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `PlacementGroupArn`<sup>Required</sup> <a name="PlacementGroupArn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.placementGroupArn"></a>

```csharp
public string PlacementGroupArn { get; }
```

- *Type:* string

---

##### `ReservationType`<sup>Required</sup> <a name="ReservationType" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.reservationType"></a>

```csharp
public string ReservationType { get; }
```

- *Type:* string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.tenancy"></a>

```csharp
public string Tenancy { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.filterInput"></a>

```csharp
public IResolvable|DataAwsEc2CapacityBlockReservationFilter[] FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2CapacityBlockReservationCommitmentInfo <a name="DataAwsEc2CapacityBlockReservationCommitmentInfo" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2CapacityBlockReservationCommitmentInfo {

};
```


### DataAwsEc2CapacityBlockReservationConfig <a name="DataAwsEc2CapacityBlockReservationConfig" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2CapacityBlockReservationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|DataAwsEc2CapacityBlockReservationFilter[] Filter = null,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.filter">Filter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/ec2_capacity_block_reservation#id DataAwsEc2CapacityBlockReservation#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.filter"></a>

```csharp
public IResolvable|DataAwsEc2CapacityBlockReservationFilter[] Filter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/ec2_capacity_block_reservation#filter DataAwsEc2CapacityBlockReservation#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/ec2_capacity_block_reservation#id DataAwsEc2CapacityBlockReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/ec2_capacity_block_reservation#region DataAwsEc2CapacityBlockReservation#region}

---

### DataAwsEc2CapacityBlockReservationFilter <a name="DataAwsEc2CapacityBlockReservationFilter" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2CapacityBlockReservationFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/ec2_capacity_block_reservation#name DataAwsEc2CapacityBlockReservation#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/ec2_capacity_block_reservation#values DataAwsEc2CapacityBlockReservation#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/ec2_capacity_block_reservation#name DataAwsEc2CapacityBlockReservation#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/ec2_capacity_block_reservation#values DataAwsEc2CapacityBlockReservation#values}.

---

### DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation <a name="DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation {

};
```


### DataAwsEc2CapacityBlockReservationInterruptionInfo <a name="DataAwsEc2CapacityBlockReservationInterruptionInfo" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2CapacityBlockReservationInterruptionInfo {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference <a name="DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.commitmentEndDate">CommitmentEndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.committedInstanceCount">CommittedInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfo">DataAwsEc2CapacityBlockReservationCommitmentInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommitmentEndDate`<sup>Required</sup> <a name="CommitmentEndDate" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.commitmentEndDate"></a>

```csharp
public string CommitmentEndDate { get; }
```

- *Type:* string

---

##### `CommittedInstanceCount`<sup>Required</sup> <a name="CommittedInstanceCount" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.committedInstanceCount"></a>

```csharp
public double CommittedInstanceCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.internalValue"></a>

```csharp
public DataAwsEc2CapacityBlockReservationCommitmentInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfo">DataAwsEc2CapacityBlockReservationCommitmentInfo</a>

---


### DataAwsEc2CapacityBlockReservationFilterList <a name="DataAwsEc2CapacityBlockReservationFilterList" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2CapacityBlockReservationFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.get"></a>

```csharp
private DataAwsEc2CapacityBlockReservationFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2CapacityBlockReservationFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>[]

---


### DataAwsEc2CapacityBlockReservationFilterOutputReference <a name="DataAwsEc2CapacityBlockReservationFilterOutputReference" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2CapacityBlockReservationFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2CapacityBlockReservationFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>

---


### DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference <a name="DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.interruptibleCapacityReservationId">InterruptibleCapacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.interruptionType">InterruptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.targetInstanceCount">TargetInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation">DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `InterruptibleCapacityReservationId`<sup>Required</sup> <a name="InterruptibleCapacityReservationId" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.interruptibleCapacityReservationId"></a>

```csharp
public string InterruptibleCapacityReservationId { get; }
```

- *Type:* string

---

##### `InterruptionType`<sup>Required</sup> <a name="InterruptionType" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.interruptionType"></a>

```csharp
public string InterruptionType { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TargetInstanceCount`<sup>Required</sup> <a name="TargetInstanceCount" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.targetInstanceCount"></a>

```csharp
public double TargetInstanceCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.internalValue"></a>

```csharp
public DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation">DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation</a>

---


### DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference <a name="DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.interruptionType">InterruptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.sourceCapacityReservationId">SourceCapacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfo">DataAwsEc2CapacityBlockReservationInterruptionInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InterruptionType`<sup>Required</sup> <a name="InterruptionType" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.interruptionType"></a>

```csharp
public string InterruptionType { get; }
```

- *Type:* string

---

##### `SourceCapacityReservationId`<sup>Required</sup> <a name="SourceCapacityReservationId" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.sourceCapacityReservationId"></a>

```csharp
public string SourceCapacityReservationId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.internalValue"></a>

```csharp
public DataAwsEc2CapacityBlockReservationInterruptionInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfo">DataAwsEc2CapacityBlockReservationInterruptionInfo</a>

---



