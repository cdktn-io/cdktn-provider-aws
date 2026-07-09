# `dataAwsEc2ServiceLinkVirtualInterface` Submodule <a name="`dataAwsEc2ServiceLinkVirtualInterface` Submodule" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2ServiceLinkVirtualInterface <a name="DataAwsEc2ServiceLinkVirtualInterface" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/ec2_service_link_virtual_interface aws_ec2_service_link_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2ServiceLinkVirtualInterface(Construct Scope, string Id, DataAwsEc2ServiceLinkVirtualInterfaceConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig">DataAwsEc2ServiceLinkVirtualInterfaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig">DataAwsEc2ServiceLinkVirtualInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.putFilter"></a>

```csharp
private void PutFilter(IResolvable|DataAwsEc2ServiceLinkVirtualInterfaceFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.putFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter">DataAwsEc2ServiceLinkVirtualInterfaceFilter</a>[]

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsEc2ServiceLinkVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2ServiceLinkVirtualInterface.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2ServiceLinkVirtualInterface.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2ServiceLinkVirtualInterface.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2ServiceLinkVirtualInterface.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsEc2ServiceLinkVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEc2ServiceLinkVirtualInterface to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEc2ServiceLinkVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/ec2_service_link_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEc2ServiceLinkVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.configurationState">ConfigurationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList">DataAwsEc2ServiceLinkVirtualInterfaceFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.localAddress">LocalAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.outpostArn">OutpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.outpostId">OutpostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.outpostLagId">OutpostLagId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.peerAddress">PeerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.peerBgpAsn">PeerBgpAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.vlan">Vlan</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter">DataAwsEc2ServiceLinkVirtualInterfaceFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ConfigurationState`<sup>Required</sup> <a name="ConfigurationState" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.configurationState"></a>

```csharp
public string ConfigurationState { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.filter"></a>

```csharp
public DataAwsEc2ServiceLinkVirtualInterfaceFilterList Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList">DataAwsEc2ServiceLinkVirtualInterfaceFilterList</a>

---

##### `LocalAddress`<sup>Required</sup> <a name="LocalAddress" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.localAddress"></a>

```csharp
public string LocalAddress { get; }
```

- *Type:* string

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.outpostArn"></a>

```csharp
public string OutpostArn { get; }
```

- *Type:* string

---

##### `OutpostId`<sup>Required</sup> <a name="OutpostId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.outpostId"></a>

```csharp
public string OutpostId { get; }
```

- *Type:* string

---

##### `OutpostLagId`<sup>Required</sup> <a name="OutpostLagId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.outpostLagId"></a>

```csharp
public string OutpostLagId { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `PeerAddress`<sup>Required</sup> <a name="PeerAddress" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.peerAddress"></a>

```csharp
public string PeerAddress { get; }
```

- *Type:* string

---

##### `PeerBgpAsn`<sup>Required</sup> <a name="PeerBgpAsn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.peerBgpAsn"></a>

```csharp
public double PeerBgpAsn { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.vlan"></a>

```csharp
public double Vlan { get; }
```

- *Type:* double

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.filterInput"></a>

```csharp
public IResolvable|DataAwsEc2ServiceLinkVirtualInterfaceFilter[] FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter">DataAwsEc2ServiceLinkVirtualInterfaceFilter</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2ServiceLinkVirtualInterfaceConfig <a name="DataAwsEc2ServiceLinkVirtualInterfaceConfig" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2ServiceLinkVirtualInterfaceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|DataAwsEc2ServiceLinkVirtualInterfaceFilter[] Filter = null,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.filter">Filter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter">DataAwsEc2ServiceLinkVirtualInterfaceFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/ec2_service_link_virtual_interface#id DataAwsEc2ServiceLinkVirtualInterface#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.filter"></a>

```csharp
public IResolvable|DataAwsEc2ServiceLinkVirtualInterfaceFilter[] Filter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter">DataAwsEc2ServiceLinkVirtualInterfaceFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/ec2_service_link_virtual_interface#filter DataAwsEc2ServiceLinkVirtualInterface#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/ec2_service_link_virtual_interface#id DataAwsEc2ServiceLinkVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/ec2_service_link_virtual_interface#region DataAwsEc2ServiceLinkVirtualInterface#region}

---

### DataAwsEc2ServiceLinkVirtualInterfaceFilter <a name="DataAwsEc2ServiceLinkVirtualInterfaceFilter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2ServiceLinkVirtualInterfaceFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/ec2_service_link_virtual_interface#name DataAwsEc2ServiceLinkVirtualInterface#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/ec2_service_link_virtual_interface#values DataAwsEc2ServiceLinkVirtualInterface#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/ec2_service_link_virtual_interface#name DataAwsEc2ServiceLinkVirtualInterface#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/ec2_service_link_virtual_interface#values DataAwsEc2ServiceLinkVirtualInterface#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2ServiceLinkVirtualInterfaceFilterList <a name="DataAwsEc2ServiceLinkVirtualInterfaceFilterList" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2ServiceLinkVirtualInterfaceFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.get"></a>

```csharp
private DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter">DataAwsEc2ServiceLinkVirtualInterfaceFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2ServiceLinkVirtualInterfaceFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter">DataAwsEc2ServiceLinkVirtualInterfaceFilter</a>[]

---


### DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference <a name="DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter">DataAwsEc2ServiceLinkVirtualInterfaceFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2ServiceLinkVirtualInterfaceFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter">DataAwsEc2ServiceLinkVirtualInterfaceFilter</a>

---



