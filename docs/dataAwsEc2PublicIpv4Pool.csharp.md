# `dataAwsEc2PublicIpv4Pool` Submodule <a name="`dataAwsEc2PublicIpv4Pool` Submodule" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2PublicIpv4Pool <a name="DataAwsEc2PublicIpv4Pool" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_public_ipv4_pool aws_ec2_public_ipv4_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2PublicIpv4Pool(Construct Scope, string Id, DataAwsEc2PublicIpv4PoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig">DataAwsEc2PublicIpv4PoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig">DataAwsEc2PublicIpv4PoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsEc2PublicIpv4Pool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2PublicIpv4Pool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2PublicIpv4Pool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2PublicIpv4Pool.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2PublicIpv4Pool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsEc2PublicIpv4Pool resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEc2PublicIpv4Pool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEc2PublicIpv4Pool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_public_ipv4_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEc2PublicIpv4Pool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.networkBorderGroup">NetworkBorderGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.poolAddressRanges">PoolAddressRanges</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList">DataAwsEc2PublicIpv4PoolPoolAddressRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.totalAddressCount">TotalAddressCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.totalAvailableAddressCount">TotalAvailableAddressCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.poolIdInput">PoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.poolId">PoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `NetworkBorderGroup`<sup>Required</sup> <a name="NetworkBorderGroup" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.networkBorderGroup"></a>

```csharp
public string NetworkBorderGroup { get; }
```

- *Type:* string

---

##### `PoolAddressRanges`<sup>Required</sup> <a name="PoolAddressRanges" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.poolAddressRanges"></a>

```csharp
public DataAwsEc2PublicIpv4PoolPoolAddressRangesList PoolAddressRanges { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList">DataAwsEc2PublicIpv4PoolPoolAddressRangesList</a>

---

##### `TotalAddressCount`<sup>Required</sup> <a name="TotalAddressCount" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.totalAddressCount"></a>

```csharp
public double TotalAddressCount { get; }
```

- *Type:* double

---

##### `TotalAvailableAddressCount`<sup>Required</sup> <a name="TotalAvailableAddressCount" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.totalAvailableAddressCount"></a>

```csharp
public double TotalAvailableAddressCount { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PoolIdInput`<sup>Optional</sup> <a name="PoolIdInput" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.poolIdInput"></a>

```csharp
public string PoolIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.poolId"></a>

```csharp
public string PoolId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2PublicIpv4PoolConfig <a name="DataAwsEc2PublicIpv4PoolConfig" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2PublicIpv4PoolConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PoolId,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.poolId">PoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_public_ipv4_pool#pool_id DataAwsEc2PublicIpv4Pool#pool_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_public_ipv4_pool#id DataAwsEc2PublicIpv4Pool#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_public_ipv4_pool#tags DataAwsEc2PublicIpv4Pool#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.poolId"></a>

```csharp
public string PoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_public_ipv4_pool#pool_id DataAwsEc2PublicIpv4Pool#pool_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_public_ipv4_pool#id DataAwsEc2PublicIpv4Pool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_public_ipv4_pool#region DataAwsEc2PublicIpv4Pool#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/data-sources/ec2_public_ipv4_pool#tags DataAwsEc2PublicIpv4Pool#tags}.

---

### DataAwsEc2PublicIpv4PoolPoolAddressRanges <a name="DataAwsEc2PublicIpv4PoolPoolAddressRanges" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRanges.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2PublicIpv4PoolPoolAddressRanges {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2PublicIpv4PoolPoolAddressRangesList <a name="DataAwsEc2PublicIpv4PoolPoolAddressRangesList" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2PublicIpv4PoolPoolAddressRangesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.get"></a>

```csharp
private DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference <a name="DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.addressCount">AddressCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.availableAddressCount">AvailableAddressCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.firstAddress">FirstAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.lastAddress">LastAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRanges">DataAwsEc2PublicIpv4PoolPoolAddressRanges</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressCount`<sup>Required</sup> <a name="AddressCount" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.addressCount"></a>

```csharp
public double AddressCount { get; }
```

- *Type:* double

---

##### `AvailableAddressCount`<sup>Required</sup> <a name="AvailableAddressCount" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.availableAddressCount"></a>

```csharp
public double AvailableAddressCount { get; }
```

- *Type:* double

---

##### `FirstAddress`<sup>Required</sup> <a name="FirstAddress" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.firstAddress"></a>

```csharp
public string FirstAddress { get; }
```

- *Type:* string

---

##### `LastAddress`<sup>Required</sup> <a name="LastAddress" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.lastAddress"></a>

```csharp
public string LastAddress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.internalValue"></a>

```csharp
public DataAwsEc2PublicIpv4PoolPoolAddressRanges InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRanges">DataAwsEc2PublicIpv4PoolPoolAddressRanges</a>

---



