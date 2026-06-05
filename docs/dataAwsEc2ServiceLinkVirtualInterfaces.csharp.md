# `dataAwsEc2ServiceLinkVirtualInterfaces` Submodule <a name="`dataAwsEc2ServiceLinkVirtualInterfaces` Submodule" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2ServiceLinkVirtualInterfaces <a name="DataAwsEc2ServiceLinkVirtualInterfaces" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_service_link_virtual_interfaces aws_ec2_service_link_virtual_interfaces}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2ServiceLinkVirtualInterfaces(Construct Scope, string Id, DataAwsEc2ServiceLinkVirtualInterfacesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig">DataAwsEc2ServiceLinkVirtualInterfacesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig">DataAwsEc2ServiceLinkVirtualInterfacesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.putFilter"></a>

```csharp
private void PutFilter(IResolvable|DataAwsEc2ServiceLinkVirtualInterfacesFilter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.putFilter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>[]

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsEc2ServiceLinkVirtualInterfaces resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2ServiceLinkVirtualInterfaces.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2ServiceLinkVirtualInterfaces.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2ServiceLinkVirtualInterfaces.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsEc2ServiceLinkVirtualInterfaces.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsEc2ServiceLinkVirtualInterfaces resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEc2ServiceLinkVirtualInterfaces to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEc2ServiceLinkVirtualInterfaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_service_link_virtual_interfaces#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEc2ServiceLinkVirtualInterfaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList">DataAwsEc2ServiceLinkVirtualInterfacesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.ids">Ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.filter"></a>

```csharp
public DataAwsEc2ServiceLinkVirtualInterfacesFilterList Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList">DataAwsEc2ServiceLinkVirtualInterfacesFilterList</a>

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.ids"></a>

```csharp
public string[] Ids { get; }
```

- *Type:* string[]

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.filterInput"></a>

```csharp
public IResolvable|DataAwsEc2ServiceLinkVirtualInterfacesFilter[] FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2ServiceLinkVirtualInterfacesConfig <a name="DataAwsEc2ServiceLinkVirtualInterfacesConfig" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2ServiceLinkVirtualInterfacesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|DataAwsEc2ServiceLinkVirtualInterfacesFilter[] Filter = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.filter">Filter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_service_link_virtual_interfaces#tags DataAwsEc2ServiceLinkVirtualInterfaces#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.filter"></a>

```csharp
public IResolvable|DataAwsEc2ServiceLinkVirtualInterfacesFilter[] Filter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_service_link_virtual_interfaces#filter DataAwsEc2ServiceLinkVirtualInterfaces#filter}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_service_link_virtual_interfaces#region DataAwsEc2ServiceLinkVirtualInterfaces#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_service_link_virtual_interfaces#tags DataAwsEc2ServiceLinkVirtualInterfaces#tags}.

---

### DataAwsEc2ServiceLinkVirtualInterfacesFilter <a name="DataAwsEc2ServiceLinkVirtualInterfacesFilter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2ServiceLinkVirtualInterfacesFilter {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_service_link_virtual_interfaces#name DataAwsEc2ServiceLinkVirtualInterfaces#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_service_link_virtual_interfaces#values DataAwsEc2ServiceLinkVirtualInterfaces#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_service_link_virtual_interfaces#name DataAwsEc2ServiceLinkVirtualInterfaces#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/ec2_service_link_virtual_interfaces#values DataAwsEc2ServiceLinkVirtualInterfaces#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2ServiceLinkVirtualInterfacesFilterList <a name="DataAwsEc2ServiceLinkVirtualInterfacesFilterList" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2ServiceLinkVirtualInterfacesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.get"></a>

```csharp
private DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2ServiceLinkVirtualInterfacesFilter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>[]

---


### DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference <a name="DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAwsEc2ServiceLinkVirtualInterfacesFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>

---



