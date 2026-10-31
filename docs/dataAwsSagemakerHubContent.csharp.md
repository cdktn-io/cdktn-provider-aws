# `dataAwsSagemakerHubContent` Submodule <a name="`dataAwsSagemakerHubContent` Submodule" id="@cdktn/provider-aws.dataAwsSagemakerHubContent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSagemakerHubContent <a name="DataAwsSagemakerHubContent" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content aws_sagemaker_hub_content}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSagemakerHubContent(Construct Scope, string Id, DataAwsSagemakerHubContentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig">DataAwsSagemakerHubContentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig">DataAwsSagemakerHubContentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetHubContentVersion">ResetHubContentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetHubContentVersion` <a name="ResetHubContentVersion" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetHubContentVersion"></a>

```csharp
private void ResetHubContentVersion()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsSagemakerHubContent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsSagemakerHubContent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsSagemakerHubContent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsSagemakerHubContent.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsSagemakerHubContent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsSagemakerHubContent resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSagemakerHubContent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSagemakerHubContent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsSagemakerHubContent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.documentSchemaVersion">DocumentSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.failureReason">FailureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubArn">HubArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentArn">HubContentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDependency">HubContentDependency</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList">DataAwsSagemakerHubContentHubContentDependencyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDescription">HubContentDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDisplayName">HubContentDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDocument">HubContentDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentMarkdown">HubContentMarkdown</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentSearchKeywords">HubContentSearchKeywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentStatus">HubContentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.lastModifiedTime">LastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.referenceMinVersion">ReferenceMinVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.sagemakerPublicHubContentArn">SagemakerPublicHubContentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.supportStatus">SupportStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.versionedHubContentArn">VersionedHubContentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentNameInput">HubContentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentTypeInput">HubContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentVersionInput">HubContentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubNameInput">HubNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentName">HubContentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentType">HubContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentVersion">HubContentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubName">HubName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `DocumentSchemaVersion`<sup>Required</sup> <a name="DocumentSchemaVersion" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.documentSchemaVersion"></a>

```csharp
public string DocumentSchemaVersion { get; }
```

- *Type:* string

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.failureReason"></a>

```csharp
public string FailureReason { get; }
```

- *Type:* string

---

##### `HubArn`<sup>Required</sup> <a name="HubArn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubArn"></a>

```csharp
public string HubArn { get; }
```

- *Type:* string

---

##### `HubContentArn`<sup>Required</sup> <a name="HubContentArn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentArn"></a>

```csharp
public string HubContentArn { get; }
```

- *Type:* string

---

##### `HubContentDependency`<sup>Required</sup> <a name="HubContentDependency" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDependency"></a>

```csharp
public DataAwsSagemakerHubContentHubContentDependencyList HubContentDependency { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList">DataAwsSagemakerHubContentHubContentDependencyList</a>

---

##### `HubContentDescription`<sup>Required</sup> <a name="HubContentDescription" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDescription"></a>

```csharp
public string HubContentDescription { get; }
```

- *Type:* string

---

##### `HubContentDisplayName`<sup>Required</sup> <a name="HubContentDisplayName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDisplayName"></a>

```csharp
public string HubContentDisplayName { get; }
```

- *Type:* string

---

##### `HubContentDocument`<sup>Required</sup> <a name="HubContentDocument" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDocument"></a>

```csharp
public string HubContentDocument { get; }
```

- *Type:* string

---

##### `HubContentMarkdown`<sup>Required</sup> <a name="HubContentMarkdown" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentMarkdown"></a>

```csharp
public string HubContentMarkdown { get; }
```

- *Type:* string

---

##### `HubContentSearchKeywords`<sup>Required</sup> <a name="HubContentSearchKeywords" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentSearchKeywords"></a>

```csharp
public string[] HubContentSearchKeywords { get; }
```

- *Type:* string[]

---

##### `HubContentStatus`<sup>Required</sup> <a name="HubContentStatus" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentStatus"></a>

```csharp
public string HubContentStatus { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.lastModifiedTime"></a>

```csharp
public string LastModifiedTime { get; }
```

- *Type:* string

---

##### `ReferenceMinVersion`<sup>Required</sup> <a name="ReferenceMinVersion" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.referenceMinVersion"></a>

```csharp
public string ReferenceMinVersion { get; }
```

- *Type:* string

---

##### `SagemakerPublicHubContentArn`<sup>Required</sup> <a name="SagemakerPublicHubContentArn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.sagemakerPublicHubContentArn"></a>

```csharp
public string SagemakerPublicHubContentArn { get; }
```

- *Type:* string

---

##### `SupportStatus`<sup>Required</sup> <a name="SupportStatus" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.supportStatus"></a>

```csharp
public string SupportStatus { get; }
```

- *Type:* string

---

##### `VersionedHubContentArn`<sup>Required</sup> <a name="VersionedHubContentArn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.versionedHubContentArn"></a>

```csharp
public string VersionedHubContentArn { get; }
```

- *Type:* string

---

##### `HubContentNameInput`<sup>Optional</sup> <a name="HubContentNameInput" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentNameInput"></a>

```csharp
public string HubContentNameInput { get; }
```

- *Type:* string

---

##### `HubContentTypeInput`<sup>Optional</sup> <a name="HubContentTypeInput" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentTypeInput"></a>

```csharp
public string HubContentTypeInput { get; }
```

- *Type:* string

---

##### `HubContentVersionInput`<sup>Optional</sup> <a name="HubContentVersionInput" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentVersionInput"></a>

```csharp
public string HubContentVersionInput { get; }
```

- *Type:* string

---

##### `HubNameInput`<sup>Optional</sup> <a name="HubNameInput" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubNameInput"></a>

```csharp
public string HubNameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `HubContentName`<sup>Required</sup> <a name="HubContentName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentName"></a>

```csharp
public string HubContentName { get; }
```

- *Type:* string

---

##### `HubContentType`<sup>Required</sup> <a name="HubContentType" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentType"></a>

```csharp
public string HubContentType { get; }
```

- *Type:* string

---

##### `HubContentVersion`<sup>Required</sup> <a name="HubContentVersion" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentVersion"></a>

```csharp
public string HubContentVersion { get; }
```

- *Type:* string

---

##### `HubName`<sup>Required</sup> <a name="HubName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubName"></a>

```csharp
public string HubName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSagemakerHubContentConfig <a name="DataAwsSagemakerHubContentConfig" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSagemakerHubContentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string HubContentName,
    string HubContentType,
    string HubName,
    string HubContentVersion = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentName">HubContentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_name DataAwsSagemakerHubContent#hub_content_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentType">HubContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_type DataAwsSagemakerHubContent#hub_content_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubName">HubName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_name DataAwsSagemakerHubContent#hub_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentVersion">HubContentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_version DataAwsSagemakerHubContent#hub_content_version}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `HubContentName`<sup>Required</sup> <a name="HubContentName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentName"></a>

```csharp
public string HubContentName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_name DataAwsSagemakerHubContent#hub_content_name}.

---

##### `HubContentType`<sup>Required</sup> <a name="HubContentType" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentType"></a>

```csharp
public string HubContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_type DataAwsSagemakerHubContent#hub_content_type}.

---

##### `HubName`<sup>Required</sup> <a name="HubName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubName"></a>

```csharp
public string HubName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_name DataAwsSagemakerHubContent#hub_name}.

---

##### `HubContentVersion`<sup>Optional</sup> <a name="HubContentVersion" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentVersion"></a>

```csharp
public string HubContentVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_version DataAwsSagemakerHubContent#hub_content_version}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#region DataAwsSagemakerHubContent#region}

---

### DataAwsSagemakerHubContentHubContentDependency <a name="DataAwsSagemakerHubContentHubContentDependency" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependency.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSagemakerHubContentHubContentDependency {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSagemakerHubContentHubContentDependencyList <a name="DataAwsSagemakerHubContentHubContentDependencyList" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSagemakerHubContentHubContentDependencyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.get"></a>

```csharp
private DataAwsSagemakerHubContentHubContentDependencyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsSagemakerHubContentHubContentDependencyOutputReference <a name="DataAwsSagemakerHubContentHubContentDependencyOutputReference" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsSagemakerHubContentHubContentDependencyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.dependencyCopyPath">DependencyCopyPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.dependencyOriginPath">DependencyOriginPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependency">DataAwsSagemakerHubContentHubContentDependency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DependencyCopyPath`<sup>Required</sup> <a name="DependencyCopyPath" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.dependencyCopyPath"></a>

```csharp
public string DependencyCopyPath { get; }
```

- *Type:* string

---

##### `DependencyOriginPath`<sup>Required</sup> <a name="DependencyOriginPath" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.dependencyOriginPath"></a>

```csharp
public string DependencyOriginPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.internalValue"></a>

```csharp
public DataAwsSagemakerHubContentHubContentDependency InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependency">DataAwsSagemakerHubContentHubContentDependency</a>

---



