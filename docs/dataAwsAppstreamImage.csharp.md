# `dataAwsAppstreamImage` Submodule <a name="`dataAwsAppstreamImage` Submodule" id="@cdktn/provider-aws.dataAwsAppstreamImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAppstreamImage <a name="DataAwsAppstreamImage" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/appstream_image aws_appstream_image}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAppstreamImage(Construct Scope, string Id, DataAwsAppstreamImageConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig">DataAwsAppstreamImageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig">DataAwsAppstreamImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetMostRecent">ResetMostRecent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetNameRegex">ResetNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetMostRecent` <a name="ResetMostRecent" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetMostRecent"></a>

```csharp
private void ResetMostRecent()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNameRegex` <a name="ResetNameRegex" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetNameRegex"></a>

```csharp
private void ResetNameRegex()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsAppstreamImage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsAppstreamImage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsAppstreamImage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsAppstreamImage.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsAppstreamImage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsAppstreamImage resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsAppstreamImage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsAppstreamImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/appstream_image#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsAppstreamImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.applications">Applications</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList">DataAwsAppstreamImageApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.appstreamAgentVersion">AppstreamAgentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.baseImageArn">BaseImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.imageBuilderName">ImageBuilderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.imageBuilderSupported">ImageBuilderSupported</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.imagePermissions">ImagePermissions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList">DataAwsAppstreamImageImagePermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.publicBaseImageReleasedDate">PublicBaseImageReleasedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.stateChangeReason">StateChangeReason</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList">DataAwsAppstreamImageStateChangeReasonList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.mostRecentInput">MostRecentInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.nameRegexInput">NameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.mostRecent">MostRecent</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.nameRegex">NameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Applications`<sup>Required</sup> <a name="Applications" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.applications"></a>

```csharp
public DataAwsAppstreamImageApplicationsList Applications { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList">DataAwsAppstreamImageApplicationsList</a>

---

##### `AppstreamAgentVersion`<sup>Required</sup> <a name="AppstreamAgentVersion" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.appstreamAgentVersion"></a>

```csharp
public string AppstreamAgentVersion { get; }
```

- *Type:* string

---

##### `BaseImageArn`<sup>Required</sup> <a name="BaseImageArn" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.baseImageArn"></a>

```csharp
public string BaseImageArn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ImageBuilderName`<sup>Required</sup> <a name="ImageBuilderName" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.imageBuilderName"></a>

```csharp
public string ImageBuilderName { get; }
```

- *Type:* string

---

##### `ImageBuilderSupported`<sup>Required</sup> <a name="ImageBuilderSupported" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.imageBuilderSupported"></a>

```csharp
public IResolvable ImageBuilderSupported { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ImagePermissions`<sup>Required</sup> <a name="ImagePermissions" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.imagePermissions"></a>

```csharp
public DataAwsAppstreamImageImagePermissionsList ImagePermissions { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList">DataAwsAppstreamImageImagePermissionsList</a>

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `PublicBaseImageReleasedDate`<sup>Required</sup> <a name="PublicBaseImageReleasedDate" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.publicBaseImageReleasedDate"></a>

```csharp
public string PublicBaseImageReleasedDate { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateChangeReason`<sup>Required</sup> <a name="StateChangeReason" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.stateChangeReason"></a>

```csharp
public DataAwsAppstreamImageStateChangeReasonList StateChangeReason { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList">DataAwsAppstreamImageStateChangeReasonList</a>

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `MostRecentInput`<sup>Optional</sup> <a name="MostRecentInput" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.mostRecentInput"></a>

```csharp
public bool|IResolvable MostRecentInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NameRegexInput`<sup>Optional</sup> <a name="NameRegexInput" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.nameRegexInput"></a>

```csharp
public string NameRegexInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `MostRecent`<sup>Required</sup> <a name="MostRecent" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.mostRecent"></a>

```csharp
public bool|IResolvable MostRecent { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NameRegex`<sup>Required</sup> <a name="NameRegex" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.nameRegex"></a>

```csharp
public string NameRegex { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAppstreamImageApplications <a name="DataAwsAppstreamImageApplications" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAppstreamImageApplications {

};
```


### DataAwsAppstreamImageApplicationsIconS3Location <a name="DataAwsAppstreamImageApplicationsIconS3Location" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAppstreamImageApplicationsIconS3Location {

};
```


### DataAwsAppstreamImageConfig <a name="DataAwsAppstreamImageConfig" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAppstreamImageConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Arn = null,
    bool|IResolvable MostRecent = null,
    string Name = null,
    string NameRegex = null,
    string Region = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/appstream_image#arn DataAwsAppstreamImage#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.mostRecent">MostRecent</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/appstream_image#most_recent DataAwsAppstreamImage#most_recent}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/appstream_image#name DataAwsAppstreamImage#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.nameRegex">NameRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/appstream_image#name_regex DataAwsAppstreamImage#name_regex}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/appstream_image#type DataAwsAppstreamImage#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/appstream_image#arn DataAwsAppstreamImage#arn}.

---

##### `MostRecent`<sup>Optional</sup> <a name="MostRecent" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.mostRecent"></a>

```csharp
public bool|IResolvable MostRecent { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/appstream_image#most_recent DataAwsAppstreamImage#most_recent}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/appstream_image#name DataAwsAppstreamImage#name}.

---

##### `NameRegex`<sup>Optional</sup> <a name="NameRegex" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.nameRegex"></a>

```csharp
public string NameRegex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/appstream_image#name_regex DataAwsAppstreamImage#name_regex}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/appstream_image#region DataAwsAppstreamImage#region}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/data-sources/appstream_image#type DataAwsAppstreamImage#type}.

---

### DataAwsAppstreamImageImagePermissions <a name="DataAwsAppstreamImageImagePermissions" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAppstreamImageImagePermissions {

};
```


### DataAwsAppstreamImageStateChangeReason <a name="DataAwsAppstreamImageStateChangeReason" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReason"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReason.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAppstreamImageStateChangeReason {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAppstreamImageApplicationsIconS3LocationList <a name="DataAwsAppstreamImageApplicationsIconS3LocationList" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAppstreamImageApplicationsIconS3LocationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.get"></a>

```csharp
private DataAwsAppstreamImageApplicationsIconS3LocationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppstreamImageApplicationsIconS3LocationOutputReference <a name="DataAwsAppstreamImageApplicationsIconS3LocationOutputReference" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAppstreamImageApplicationsIconS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.property.s3Key">S3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3Location">DataAwsAppstreamImageApplicationsIconS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.property.s3Key"></a>

```csharp
public string S3Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppstreamImageApplicationsIconS3Location InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3Location">DataAwsAppstreamImageApplicationsIconS3Location</a>

---


### DataAwsAppstreamImageApplicationsList <a name="DataAwsAppstreamImageApplicationsList" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAppstreamImageApplicationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.get"></a>

```csharp
private DataAwsAppstreamImageApplicationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppstreamImageApplicationsOutputReference <a name="DataAwsAppstreamImageApplicationsOutputReference" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAppstreamImageApplicationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.appBlockArn">AppBlockArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.iconS3Location">IconS3Location</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList">DataAwsAppstreamImageApplicationsIconS3LocationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.iconUrl">IconUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.instanceFamilies">InstanceFamilies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.launchParameters">LaunchParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.launchPath">LaunchPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.metadata">Metadata</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.platforms">Platforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.workingDirectory">WorkingDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplications">DataAwsAppstreamImageApplications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppBlockArn`<sup>Required</sup> <a name="AppBlockArn" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.appBlockArn"></a>

```csharp
public string AppBlockArn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IconS3Location`<sup>Required</sup> <a name="IconS3Location" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.iconS3Location"></a>

```csharp
public DataAwsAppstreamImageApplicationsIconS3LocationList IconS3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsIconS3LocationList">DataAwsAppstreamImageApplicationsIconS3LocationList</a>

---

##### `IconUrl`<sup>Required</sup> <a name="IconUrl" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.iconUrl"></a>

```csharp
public string IconUrl { get; }
```

- *Type:* string

---

##### `InstanceFamilies`<sup>Required</sup> <a name="InstanceFamilies" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.instanceFamilies"></a>

```csharp
public string[] InstanceFamilies { get; }
```

- *Type:* string[]

---

##### `LaunchParameters`<sup>Required</sup> <a name="LaunchParameters" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.launchParameters"></a>

```csharp
public string LaunchParameters { get; }
```

- *Type:* string

---

##### `LaunchPath`<sup>Required</sup> <a name="LaunchPath" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.launchPath"></a>

```csharp
public string LaunchPath { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Platforms`<sup>Required</sup> <a name="Platforms" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.platforms"></a>

```csharp
public string[] Platforms { get; }
```

- *Type:* string[]

---

##### `WorkingDirectory`<sup>Required</sup> <a name="WorkingDirectory" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.workingDirectory"></a>

```csharp
public string WorkingDirectory { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplicationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppstreamImageApplications InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageApplications">DataAwsAppstreamImageApplications</a>

---


### DataAwsAppstreamImageImagePermissionsList <a name="DataAwsAppstreamImageImagePermissionsList" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAppstreamImageImagePermissionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.get"></a>

```csharp
private DataAwsAppstreamImageImagePermissionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppstreamImageImagePermissionsOutputReference <a name="DataAwsAppstreamImageImagePermissionsOutputReference" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAppstreamImageImagePermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.property.allowFleet">AllowFleet</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.property.allowImageBuilder">AllowImageBuilder</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissions">DataAwsAppstreamImageImagePermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowFleet`<sup>Required</sup> <a name="AllowFleet" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.property.allowFleet"></a>

```csharp
public IResolvable AllowFleet { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AllowImageBuilder`<sup>Required</sup> <a name="AllowImageBuilder" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.property.allowImageBuilder"></a>

```csharp
public IResolvable AllowImageBuilder { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppstreamImageImagePermissions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageImagePermissions">DataAwsAppstreamImageImagePermissions</a>

---


### DataAwsAppstreamImageStateChangeReasonList <a name="DataAwsAppstreamImageStateChangeReasonList" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAppstreamImageStateChangeReasonList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.get"></a>

```csharp
private DataAwsAppstreamImageStateChangeReasonOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsAppstreamImageStateChangeReasonOutputReference <a name="DataAwsAppstreamImageStateChangeReasonOutputReference" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsAppstreamImageStateChangeReasonOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReason">DataAwsAppstreamImageStateChangeReason</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReasonOutputReference.property.internalValue"></a>

```csharp
public DataAwsAppstreamImageStateChangeReason InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAppstreamImage.DataAwsAppstreamImageStateChangeReason">DataAwsAppstreamImageStateChangeReason</a>

---



