# `dataAwsVpcIpamPool` Submodule <a name="`dataAwsVpcIpamPool` Submodule" id="@cdktn/provider-aws.dataAwsVpcIpamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcIpamPool <a name="DataAwsVpcIpamPool" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/vpc_ipam_pool aws_vpc_ipam_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsVpcIpamPool(Construct Scope, string Id, DataAwsVpcIpamPoolConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig">DataAwsVpcIpamPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig">DataAwsVpcIpamPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetAllocationResourceTags">ResetAllocationResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetIpamPoolId">ResetIpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.putFilter"></a>

```csharp
private void PutFilter(IResolvable|DataAwsVpcIpamPoolFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.putFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter">DataAwsVpcIpamPoolFilter</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAwsVpcIpamPoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeouts">DataAwsVpcIpamPoolTimeouts</a>

---

##### `ResetAllocationResourceTags` <a name="ResetAllocationResourceTags" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetAllocationResourceTags"></a>

```csharp
private void ResetAllocationResourceTags()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpamPoolId` <a name="ResetIpamPoolId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetIpamPoolId"></a>

```csharp
private void ResetIpamPoolId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsVpcIpamPool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsVpcIpamPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsVpcIpamPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsVpcIpamPool.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsVpcIpamPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsVpcIpamPool resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsVpcIpamPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsVpcIpamPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/vpc_ipam_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsVpcIpamPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.addressFamily">AddressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.allocationDefaultNetmaskLength">AllocationDefaultNetmaskLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.allocationMaxNetmaskLength">AllocationMaxNetmaskLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.allocationMinNetmaskLength">AllocationMinNetmaskLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.autoImport">AutoImport</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.awsService">AwsService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList">DataAwsVpcIpamPoolFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.ipamScopeId">IpamScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.ipamScopeType">IpamScopeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.locale">Locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.poolDepth">PoolDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.publiclyAdvertisable">PubliclyAdvertisable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.sourceIpamPoolId">SourceIpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.sourceResource">SourceResource</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList">DataAwsVpcIpamPoolSourceResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference">DataAwsVpcIpamPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.allocationResourceTagsInput">AllocationResourceTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter">DataAwsVpcIpamPoolFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.ipamPoolIdInput">IpamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeouts">DataAwsVpcIpamPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.allocationResourceTags">AllocationResourceTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.ipamPoolId">IpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.addressFamily"></a>

```csharp
public string AddressFamily { get; }
```

- *Type:* string

---

##### `AllocationDefaultNetmaskLength`<sup>Required</sup> <a name="AllocationDefaultNetmaskLength" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.allocationDefaultNetmaskLength"></a>

```csharp
public double AllocationDefaultNetmaskLength { get; }
```

- *Type:* double

---

##### `AllocationMaxNetmaskLength`<sup>Required</sup> <a name="AllocationMaxNetmaskLength" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.allocationMaxNetmaskLength"></a>

```csharp
public double AllocationMaxNetmaskLength { get; }
```

- *Type:* double

---

##### `AllocationMinNetmaskLength`<sup>Required</sup> <a name="AllocationMinNetmaskLength" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.allocationMinNetmaskLength"></a>

```csharp
public double AllocationMinNetmaskLength { get; }
```

- *Type:* double

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AutoImport`<sup>Required</sup> <a name="AutoImport" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.autoImport"></a>

```csharp
public IResolvable AutoImport { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AwsService`<sup>Required</sup> <a name="AwsService" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.awsService"></a>

```csharp
public string AwsService { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.filter"></a>

```csharp
public DataAwsVpcIpamPoolFilterList Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList">DataAwsVpcIpamPoolFilterList</a>

---

##### `IpamScopeId`<sup>Required</sup> <a name="IpamScopeId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.ipamScopeId"></a>

```csharp
public string IpamScopeId { get; }
```

- *Type:* string

---

##### `IpamScopeType`<sup>Required</sup> <a name="IpamScopeType" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.ipamScopeType"></a>

```csharp
public string IpamScopeType { get; }
```

- *Type:* string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.locale"></a>

```csharp
public string Locale { get; }
```

- *Type:* string

---

##### `PoolDepth`<sup>Required</sup> <a name="PoolDepth" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.poolDepth"></a>

```csharp
public double PoolDepth { get; }
```

- *Type:* double

---

##### `PubliclyAdvertisable`<sup>Required</sup> <a name="PubliclyAdvertisable" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.publiclyAdvertisable"></a>

```csharp
public IResolvable PubliclyAdvertisable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SourceIpamPoolId`<sup>Required</sup> <a name="SourceIpamPoolId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.sourceIpamPoolId"></a>

```csharp
public string SourceIpamPoolId { get; }
```

- *Type:* string

---

##### `SourceResource`<sup>Required</sup> <a name="SourceResource" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.sourceResource"></a>

```csharp
public DataAwsVpcIpamPoolSourceResourceList SourceResource { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList">DataAwsVpcIpamPoolSourceResourceList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.timeouts"></a>

```csharp
public DataAwsVpcIpamPoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference">DataAwsVpcIpamPoolTimeoutsOutputReference</a>

---

##### `AllocationResourceTagsInput`<sup>Optional</sup> <a name="AllocationResourceTagsInput" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.allocationResourceTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AllocationResourceTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.filterInput"></a>

```csharp
public IResolvable|DataAwsVpcIpamPoolFilter[] FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter">DataAwsVpcIpamPoolFilter</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpamPoolIdInput`<sup>Optional</sup> <a name="IpamPoolIdInput" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.ipamPoolIdInput"></a>

```csharp
public string IpamPoolIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAwsVpcIpamPoolTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeouts">DataAwsVpcIpamPoolTimeouts</a>

---

##### `AllocationResourceTags`<sup>Required</sup> <a name="AllocationResourceTags" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.allocationResourceTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AllocationResourceTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpamPoolId`<sup>Required</sup> <a name="IpamPoolId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.ipamPoolId"></a>

```csharp
public string IpamPoolId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcIpamPoolConfig <a name="DataAwsVpcIpamPoolConfig" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsVpcIpamPoolConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    System.Collections.Generic.IDictionary<string, string> AllocationResourceTags = null,
    IResolvable|DataAwsVpcIpamPoolFilter[] Filter = null,
    string Id = null,
    string IpamPoolId = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    DataAwsVpcIpamPoolTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.allocationResourceTags">AllocationResourceTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/vpc_ipam_pool#allocation_resource_tags DataAwsVpcIpamPool#allocation_resource_tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.filter">Filter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter">DataAwsVpcIpamPoolFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/vpc_ipam_pool#id DataAwsVpcIpamPool#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.ipamPoolId">IpamPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/vpc_ipam_pool#ipam_pool_id DataAwsVpcIpamPool#ipam_pool_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/vpc_ipam_pool#tags DataAwsVpcIpamPool#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeouts">DataAwsVpcIpamPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AllocationResourceTags`<sup>Optional</sup> <a name="AllocationResourceTags" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.allocationResourceTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AllocationResourceTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/vpc_ipam_pool#allocation_resource_tags DataAwsVpcIpamPool#allocation_resource_tags}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.filter"></a>

```csharp
public IResolvable|DataAwsVpcIpamPoolFilter[] Filter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter">DataAwsVpcIpamPoolFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/vpc_ipam_pool#filter DataAwsVpcIpamPool#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/vpc_ipam_pool#id DataAwsVpcIpamPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpamPoolId`<sup>Optional</sup> <a name="IpamPoolId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.ipamPoolId"></a>

```csharp
public string IpamPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/vpc_ipam_pool#ipam_pool_id DataAwsVpcIpamPool#ipam_pool_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/vpc_ipam_pool#region DataAwsVpcIpamPool#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/vpc_ipam_pool#tags DataAwsVpcIpamPool#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolConfig.property.timeouts"></a>

```csharp
public DataAwsVpcIpamPoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeouts">DataAwsVpcIpamPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/vpc_ipam_pool#timeouts DataAwsVpcIpamPool#timeouts}

---

### DataAwsVpcIpamPoolFilter <a name="DataAwsVpcIpamPoolFilter" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsVpcIpamPoolFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/vpc_ipam_pool#name DataAwsVpcIpamPool#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/vpc_ipam_pool#values DataAwsVpcIpamPool#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/vpc_ipam_pool#name DataAwsVpcIpamPool#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/vpc_ipam_pool#values DataAwsVpcIpamPool#values}.

---

### DataAwsVpcIpamPoolSourceResource <a name="DataAwsVpcIpamPoolSourceResource" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsVpcIpamPoolSourceResource {

};
```


### DataAwsVpcIpamPoolTimeouts <a name="DataAwsVpcIpamPoolTimeouts" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsVpcIpamPoolTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/vpc_ipam_pool#read DataAwsVpcIpamPool#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/vpc_ipam_pool#read DataAwsVpcIpamPool#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpcIpamPoolFilterList <a name="DataAwsVpcIpamPoolFilterList" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsVpcIpamPoolFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.get"></a>

```csharp
private DataAwsVpcIpamPoolFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter">DataAwsVpcIpamPoolFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsVpcIpamPoolFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter">DataAwsVpcIpamPoolFilter</a>[]

---


### DataAwsVpcIpamPoolFilterOutputReference <a name="DataAwsVpcIpamPoolFilterOutputReference" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsVpcIpamPoolFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter">DataAwsVpcIpamPoolFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsVpcIpamPoolFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolFilter">DataAwsVpcIpamPoolFilter</a>

---


### DataAwsVpcIpamPoolSourceResourceList <a name="DataAwsVpcIpamPoolSourceResourceList" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsVpcIpamPoolSourceResourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.get"></a>

```csharp
private DataAwsVpcIpamPoolSourceResourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsVpcIpamPoolSourceResourceOutputReference <a name="DataAwsVpcIpamPoolSourceResourceOutputReference" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsVpcIpamPoolSourceResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.resourceOwner">ResourceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.resourceRegion">ResourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResource">DataAwsVpcIpamPoolSourceResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceOwner`<sup>Required</sup> <a name="ResourceOwner" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.resourceOwner"></a>

```csharp
public string ResourceOwner { get; }
```

- *Type:* string

---

##### `ResourceRegion`<sup>Required</sup> <a name="ResourceRegion" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.resourceRegion"></a>

```csharp
public string ResourceRegion { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResourceOutputReference.property.internalValue"></a>

```csharp
public DataAwsVpcIpamPoolSourceResource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolSourceResource">DataAwsVpcIpamPoolSourceResource</a>

---


### DataAwsVpcIpamPoolTimeoutsOutputReference <a name="DataAwsVpcIpamPoolTimeoutsOutputReference" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsVpcIpamPoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeouts">DataAwsVpcIpamPoolTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsVpcIpamPoolTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsVpcIpamPool.DataAwsVpcIpamPoolTimeouts">DataAwsVpcIpamPoolTimeouts</a>

---



