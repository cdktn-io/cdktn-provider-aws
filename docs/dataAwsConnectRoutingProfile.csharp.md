# `dataAwsConnectRoutingProfile` Submodule <a name="`dataAwsConnectRoutingProfile` Submodule" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsConnectRoutingProfile <a name="DataAwsConnectRoutingProfile" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/connect_routing_profile aws_connect_routing_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsConnectRoutingProfile(Construct Scope, string Id, DataAwsConnectRoutingProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig">DataAwsConnectRoutingProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig">DataAwsConnectRoutingProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetRoutingProfileId">ResetRoutingProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRoutingProfileId` <a name="ResetRoutingProfileId" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetRoutingProfileId"></a>

```csharp
private void ResetRoutingProfileId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsConnectRoutingProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsConnectRoutingProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsConnectRoutingProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsConnectRoutingProfile.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsConnectRoutingProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsConnectRoutingProfile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsConnectRoutingProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsConnectRoutingProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/connect_routing_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsConnectRoutingProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.defaultOutboundQueueId">DefaultOutboundQueueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.mediaConcurrencies">MediaConcurrencies</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList">DataAwsConnectRoutingProfileMediaConcurrenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.queueConfigs">QueueConfigs</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList">DataAwsConnectRoutingProfileQueueConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.routingProfileIdInput">RoutingProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.routingProfileId">RoutingProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DefaultOutboundQueueId`<sup>Required</sup> <a name="DefaultOutboundQueueId" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.defaultOutboundQueueId"></a>

```csharp
public string DefaultOutboundQueueId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `MediaConcurrencies`<sup>Required</sup> <a name="MediaConcurrencies" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.mediaConcurrencies"></a>

```csharp
public DataAwsConnectRoutingProfileMediaConcurrenciesList MediaConcurrencies { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList">DataAwsConnectRoutingProfileMediaConcurrenciesList</a>

---

##### `QueueConfigs`<sup>Required</sup> <a name="QueueConfigs" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.queueConfigs"></a>

```csharp
public DataAwsConnectRoutingProfileQueueConfigsList QueueConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList">DataAwsConnectRoutingProfileQueueConfigsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoutingProfileIdInput`<sup>Optional</sup> <a name="RoutingProfileIdInput" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.routingProfileIdInput"></a>

```csharp
public string RoutingProfileIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RoutingProfileId`<sup>Required</sup> <a name="RoutingProfileId" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.routingProfileId"></a>

```csharp
public string RoutingProfileId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsConnectRoutingProfileConfig <a name="DataAwsConnectRoutingProfileConfig" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsConnectRoutingProfileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InstanceId,
    string Id = null,
    string Name = null,
    string Region = null,
    string RoutingProfileId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/connect_routing_profile#instance_id DataAwsConnectRoutingProfile#instance_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/connect_routing_profile#id DataAwsConnectRoutingProfile#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/connect_routing_profile#name DataAwsConnectRoutingProfile#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.routingProfileId">RoutingProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/connect_routing_profile#routing_profile_id DataAwsConnectRoutingProfile#routing_profile_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/connect_routing_profile#tags DataAwsConnectRoutingProfile#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/connect_routing_profile#instance_id DataAwsConnectRoutingProfile#instance_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/connect_routing_profile#id DataAwsConnectRoutingProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/connect_routing_profile#name DataAwsConnectRoutingProfile#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/connect_routing_profile#region DataAwsConnectRoutingProfile#region}

---

##### `RoutingProfileId`<sup>Optional</sup> <a name="RoutingProfileId" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.routingProfileId"></a>

```csharp
public string RoutingProfileId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/connect_routing_profile#routing_profile_id DataAwsConnectRoutingProfile#routing_profile_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/connect_routing_profile#tags DataAwsConnectRoutingProfile#tags}.

---

### DataAwsConnectRoutingProfileMediaConcurrencies <a name="DataAwsConnectRoutingProfileMediaConcurrencies" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrencies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsConnectRoutingProfileMediaConcurrencies {

};
```


### DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior <a name="DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior {

};
```


### DataAwsConnectRoutingProfileQueueConfigs <a name="DataAwsConnectRoutingProfileQueueConfigs" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsConnectRoutingProfileQueueConfigs {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList <a name="DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList.get"></a>

```csharp
private DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference <a name="DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.behaviorType">BehaviorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BehaviorType`<sup>Required</sup> <a name="BehaviorType" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.behaviorType"></a>

```csharp
public string BehaviorType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorOutputReference.property.internalValue"></a>

```csharp
public DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior">DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehavior</a>

---


### DataAwsConnectRoutingProfileMediaConcurrenciesList <a name="DataAwsConnectRoutingProfileMediaConcurrenciesList" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsConnectRoutingProfileMediaConcurrenciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.get"></a>

```csharp
private DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference <a name="DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.channel">Channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrency">Concurrency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.crossChannelBehavior">CrossChannelBehavior</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList">DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrencies">DataAwsConnectRoutingProfileMediaConcurrencies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.channel"></a>

```csharp
public string Channel { get; }
```

- *Type:* string

---

##### `Concurrency`<sup>Required</sup> <a name="Concurrency" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.concurrency"></a>

```csharp
public double Concurrency { get; }
```

- *Type:* double

---

##### `CrossChannelBehavior`<sup>Required</sup> <a name="CrossChannelBehavior" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.crossChannelBehavior"></a>

```csharp
public DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList CrossChannelBehavior { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList">DataAwsConnectRoutingProfileMediaConcurrenciesCrossChannelBehaviorList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference.property.internalValue"></a>

```csharp
public DataAwsConnectRoutingProfileMediaConcurrencies InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileMediaConcurrencies">DataAwsConnectRoutingProfileMediaConcurrencies</a>

---


### DataAwsConnectRoutingProfileQueueConfigsList <a name="DataAwsConnectRoutingProfileQueueConfigsList" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsConnectRoutingProfileQueueConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.get"></a>

```csharp
private DataAwsConnectRoutingProfileQueueConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsConnectRoutingProfileQueueConfigsOutputReference <a name="DataAwsConnectRoutingProfileQueueConfigsOutputReference" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsConnectRoutingProfileQueueConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.channel">Channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.delay">Delay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.queueArn">QueueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.queueId">QueueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.queueName">QueueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigs">DataAwsConnectRoutingProfileQueueConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.channel"></a>

```csharp
public string Channel { get; }
```

- *Type:* string

---

##### `Delay`<sup>Required</sup> <a name="Delay" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.delay"></a>

```csharp
public double Delay { get; }
```

- *Type:* double

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `QueueArn`<sup>Required</sup> <a name="QueueArn" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.queueArn"></a>

```csharp
public string QueueArn { get; }
```

- *Type:* string

---

##### `QueueId`<sup>Required</sup> <a name="QueueId" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.queueId"></a>

```csharp
public string QueueId { get; }
```

- *Type:* string

---

##### `QueueName`<sup>Required</sup> <a name="QueueName" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.queueName"></a>

```csharp
public string QueueName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigsOutputReference.property.internalValue"></a>

```csharp
public DataAwsConnectRoutingProfileQueueConfigs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsConnectRoutingProfile.DataAwsConnectRoutingProfileQueueConfigs">DataAwsConnectRoutingProfileQueueConfigs</a>

---



