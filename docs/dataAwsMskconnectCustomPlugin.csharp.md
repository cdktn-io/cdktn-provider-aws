# `dataAwsMskconnectCustomPlugin` Submodule <a name="`dataAwsMskconnectCustomPlugin` Submodule" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsMskconnectCustomPlugin <a name="DataAwsMskconnectCustomPlugin" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/mskconnect_custom_plugin aws_mskconnect_custom_plugin}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsMskconnectCustomPlugin(Construct Scope, string Id, DataAwsMskconnectCustomPluginConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig">DataAwsMskconnectCustomPluginConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig">DataAwsMskconnectCustomPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsMskconnectCustomPlugin resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsMskconnectCustomPlugin.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsMskconnectCustomPlugin.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsMskconnectCustomPlugin.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsMskconnectCustomPlugin.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsMskconnectCustomPlugin resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsMskconnectCustomPlugin to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsMskconnectCustomPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/mskconnect_custom_plugin#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsMskconnectCustomPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.latestRevision">LatestRevision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `LatestRevision`<sup>Required</sup> <a name="LatestRevision" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.latestRevision"></a>

```csharp
public double LatestRevision { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsMskconnectCustomPluginConfig <a name="DataAwsMskconnectCustomPluginConfig" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsMskconnectCustomPluginConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/mskconnect_custom_plugin#name DataAwsMskconnectCustomPlugin#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/mskconnect_custom_plugin#id DataAwsMskconnectCustomPlugin#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/mskconnect_custom_plugin#tags DataAwsMskconnectCustomPlugin#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/mskconnect_custom_plugin#name DataAwsMskconnectCustomPlugin#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/mskconnect_custom_plugin#id DataAwsMskconnectCustomPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/mskconnect_custom_plugin#region DataAwsMskconnectCustomPlugin#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/mskconnect_custom_plugin#tags DataAwsMskconnectCustomPlugin#tags}.

---



