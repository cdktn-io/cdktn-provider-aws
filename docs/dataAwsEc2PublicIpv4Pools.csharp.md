# `dataAwsEc2PublicIpv4Pools` Submodule <a name="`dataAwsEc2PublicIpv4Pools` Submodule" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2PublicIpv4Pools <a name="DataAwsEc2PublicIpv4Pools" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_public_ipv4_pools aws_ec2_public_ipv4_pools}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2PublicIpv4Pools(Construct Scope, string Id, DataAwsEc2PublicIpv4PoolsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig">DataAwsEc2PublicIpv4PoolsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig">DataAwsEc2PublicIpv4PoolsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.putFilter"></a>

```csharp
private void PutFilter(IResolvable|DataAwsEc2PublicIpv4PoolsFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.putFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a>[]

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsEc2PublicIpv4Pools resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2PublicIpv4Pools.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2PublicIpv4Pools.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2PublicIpv4Pools.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2PublicIpv4Pools.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsEc2PublicIpv4Pools resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEc2PublicIpv4Pools to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEc2PublicIpv4Pools that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_public_ipv4_pools#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEc2PublicIpv4Pools to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList">DataAwsEc2PublicIpv4PoolsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.poolIds">PoolIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.filter"></a>

```csharp
public DataAwsEc2PublicIpv4PoolsFilterList Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList">DataAwsEc2PublicIpv4PoolsFilterList</a>

---

##### `PoolIds`<sup>Required</sup> <a name="PoolIds" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.poolIds"></a>

```csharp
public string[] PoolIds { get; }
```

- *Type:* string[]

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.filterInput"></a>

```csharp
public IResolvable|DataAwsEc2PublicIpv4PoolsFilter[] FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4Pools.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2PublicIpv4PoolsConfig <a name="DataAwsEc2PublicIpv4PoolsConfig" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2PublicIpv4PoolsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|DataAwsEc2PublicIpv4PoolsFilter[] Filter = null,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.filter">Filter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_public_ipv4_pools#id DataAwsEc2PublicIpv4Pools#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_public_ipv4_pools#tags DataAwsEc2PublicIpv4Pools#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.filter"></a>

```csharp
public IResolvable|DataAwsEc2PublicIpv4PoolsFilter[] Filter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_public_ipv4_pools#filter DataAwsEc2PublicIpv4Pools#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_public_ipv4_pools#id DataAwsEc2PublicIpv4Pools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_public_ipv4_pools#region DataAwsEc2PublicIpv4Pools#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_public_ipv4_pools#tags DataAwsEc2PublicIpv4Pools#tags}.

---

### DataAwsEc2PublicIpv4PoolsFilter <a name="DataAwsEc2PublicIpv4PoolsFilter" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2PublicIpv4PoolsFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_public_ipv4_pools#name DataAwsEc2PublicIpv4Pools#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_public_ipv4_pools#values DataAwsEc2PublicIpv4Pools#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_public_ipv4_pools#name DataAwsEc2PublicIpv4Pools#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/ec2_public_ipv4_pools#values DataAwsEc2PublicIpv4Pools#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2PublicIpv4PoolsFilterList <a name="DataAwsEc2PublicIpv4PoolsFilterList" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2PublicIpv4PoolsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.get"></a>

```csharp
private DataAwsEc2PublicIpv4PoolsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2PublicIpv4PoolsFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a>[]

---


### DataAwsEc2PublicIpv4PoolsFilterOutputReference <a name="DataAwsEc2PublicIpv4PoolsFilterOutputReference" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2PublicIpv4PoolsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2PublicIpv4PoolsFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pools.DataAwsEc2PublicIpv4PoolsFilter">DataAwsEc2PublicIpv4PoolsFilter</a>

---



