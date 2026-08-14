# `dataAwsSsmcontactsContactChannel` Submodule <a name="`dataAwsSsmcontactsContactChannel` Submodule" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsmcontactsContactChannel <a name="DataAwsSsmcontactsContactChannel" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/ssmcontacts_contact_channel aws_ssmcontacts_contact_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSsmcontactsContactChannel(Construct Scope, string Id, DataAwsSsmcontactsContactChannelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig">DataAwsSsmcontactsContactChannelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig">DataAwsSsmcontactsContactChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsSsmcontactsContactChannel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsSsmcontactsContactChannel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsSsmcontactsContactChannel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsSsmcontactsContactChannel.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsSsmcontactsContactChannel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsSsmcontactsContactChannel resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSsmcontactsContactChannel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSsmcontactsContactChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/ssmcontacts_contact_channel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsSsmcontactsContactChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.activationStatus">ActivationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.contactId">ContactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.deliveryAddress">DeliveryAddress</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList">DataAwsSsmcontactsContactChannelDeliveryAddressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ActivationStatus`<sup>Required</sup> <a name="ActivationStatus" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.activationStatus"></a>

```csharp
public string ActivationStatus { get; }
```

- *Type:* string

---

##### `ContactId`<sup>Required</sup> <a name="ContactId" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.contactId"></a>

```csharp
public string ContactId { get; }
```

- *Type:* string

---

##### `DeliveryAddress`<sup>Required</sup> <a name="DeliveryAddress" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.deliveryAddress"></a>

```csharp
public DataAwsSsmcontactsContactChannelDeliveryAddressList DeliveryAddress { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList">DataAwsSsmcontactsContactChannelDeliveryAddressList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsmcontactsContactChannelConfig <a name="DataAwsSsmcontactsContactChannelConfig" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSsmcontactsContactChannelConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Arn,
    string Id = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/ssmcontacts_contact_channel#arn DataAwsSsmcontactsContactChannel#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/ssmcontacts_contact_channel#id DataAwsSsmcontactsContactChannel#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/ssmcontacts_contact_channel#arn DataAwsSsmcontactsContactChannel#arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/ssmcontacts_contact_channel#id DataAwsSsmcontactsContactChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/ssmcontacts_contact_channel#region DataAwsSsmcontactsContactChannel#region}

---

### DataAwsSsmcontactsContactChannelDeliveryAddress <a name="DataAwsSsmcontactsContactChannelDeliveryAddress" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSsmcontactsContactChannelDeliveryAddress {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSsmcontactsContactChannelDeliveryAddressList <a name="DataAwsSsmcontactsContactChannelDeliveryAddressList" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSsmcontactsContactChannelDeliveryAddressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.get"></a>

```csharp
private DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference <a name="DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.property.simpleAddress">SimpleAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddress">DataAwsSsmcontactsContactChannelDeliveryAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SimpleAddress`<sup>Required</sup> <a name="SimpleAddress" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.property.simpleAddress"></a>

```csharp
public string SimpleAddress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference.property.internalValue"></a>

```csharp
public DataAwsSsmcontactsContactChannelDeliveryAddress InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSsmcontactsContactChannel.DataAwsSsmcontactsContactChannelDeliveryAddress">DataAwsSsmcontactsContactChannelDeliveryAddress</a>

---



