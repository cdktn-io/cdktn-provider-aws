# `dataAwsGlueConnection` Submodule <a name="`dataAwsGlueConnection` Submodule" id="@cdktn/provider-aws.dataAwsGlueConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsGlueConnection <a name="DataAwsGlueConnection" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/glue_connection aws_glue_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsGlueConnection(Construct Scope, string Id, DataAwsGlueConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionConfig">DataAwsGlueConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionConfig">DataAwsGlueConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsGlueConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsGlueConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsGlueConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsGlueConnection.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsGlueConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsGlueConnection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsGlueConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsGlueConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/glue_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsGlueConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.athenaProperties">AthenaProperties</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.authenticationConfiguration">AuthenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList">DataAwsGlueConnectionAuthenticationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.connectionProperties">ConnectionProperties</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.matchCriteria">MatchCriteria</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.physicalConnectionRequirements">PhysicalConnectionRequirements</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList">DataAwsGlueConnectionPhysicalConnectionRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AthenaProperties`<sup>Required</sup> <a name="AthenaProperties" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.athenaProperties"></a>

```csharp
public StringMap AthenaProperties { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `AuthenticationConfiguration`<sup>Required</sup> <a name="AuthenticationConfiguration" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.authenticationConfiguration"></a>

```csharp
public DataAwsGlueConnectionAuthenticationConfigurationList AuthenticationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList">DataAwsGlueConnectionAuthenticationConfigurationList</a>

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `ConnectionProperties`<sup>Required</sup> <a name="ConnectionProperties" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.connectionProperties"></a>

```csharp
public StringMap ConnectionProperties { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `MatchCriteria`<sup>Required</sup> <a name="MatchCriteria" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.matchCriteria"></a>

```csharp
public string[] MatchCriteria { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PhysicalConnectionRequirements`<sup>Required</sup> <a name="PhysicalConnectionRequirements" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.physicalConnectionRequirements"></a>

```csharp
public DataAwsGlueConnectionPhysicalConnectionRequirementsList PhysicalConnectionRequirements { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList">DataAwsGlueConnectionPhysicalConnectionRequirementsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsGlueConnectionAuthenticationConfiguration <a name="DataAwsGlueConnectionAuthenticationConfiguration" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsGlueConnectionAuthenticationConfiguration {

};
```


### DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials <a name="DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials {

};
```


### DataAwsGlueConnectionAuthenticationConfigurationOauth2Properties <a name="DataAwsGlueConnectionAuthenticationConfigurationOauth2Properties" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2Properties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2Properties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsGlueConnectionAuthenticationConfigurationOauth2Properties {

};
```


### DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties <a name="DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties {

};
```


### DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication <a name="DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication {

};
```


### DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials <a name="DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials {

};
```


### DataAwsGlueConnectionConfig <a name="DataAwsGlueConnectionConfig" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsGlueConnectionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/glue_connection#id DataAwsGlueConnection#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/glue_connection#tags DataAwsGlueConnection#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/glue_connection#id DataAwsGlueConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/glue_connection#region DataAwsGlueConnection#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/glue_connection#tags DataAwsGlueConnection#tags}.

---

### DataAwsGlueConnectionPhysicalConnectionRequirements <a name="DataAwsGlueConnectionPhysicalConnectionRequirements" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirements.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsGlueConnectionPhysicalConnectionRequirements {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList <a name="DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList.get"></a>

```csharp
private DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference <a name="DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue"></a>

```csharp
public DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a>

---


### DataAwsGlueConnectionAuthenticationConfigurationList <a name="DataAwsGlueConnectionAuthenticationConfigurationList" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsGlueConnectionAuthenticationConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList.get"></a>

```csharp
private DataAwsGlueConnectionAuthenticationConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList <a name="DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList.get"></a>

```csharp
private DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference <a name="DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode">AuthorizationCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri">RedirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationCode`<sup>Required</sup> <a name="AuthorizationCode" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode"></a>

```csharp
public string AuthorizationCode { get; }
```

- *Type:* string

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri"></a>

```csharp
public string RedirectUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a>

---


### DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList <a name="DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList.get"></a>

```csharp
private DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList <a name="DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList.get"></a>

```csharp
private DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference <a name="DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference">AwsManagedClientApplicationReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId">UserManagedClientApplicationClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsManagedClientApplicationReference`<sup>Required</sup> <a name="AwsManagedClientApplicationReference" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference"></a>

```csharp
public string AwsManagedClientApplicationReference { get; }
```

- *Type:* string

---

##### `UserManagedClientApplicationClientId`<sup>Required</sup> <a name="UserManagedClientApplicationClientId" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId"></a>

```csharp
public string UserManagedClientApplicationClientId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.internalValue"></a>

```csharp
public DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a>

---


### DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList <a name="DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList.get"></a>

```csharp
private DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference <a name="DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.jwtToken">JwtToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.refreshToken">RefreshToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret">UserManagedClientApplicationClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `JwtToken`<sup>Required</sup> <a name="JwtToken" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.jwtToken"></a>

```csharp
public string JwtToken { get; }
```

- *Type:* string

---

##### `RefreshToken`<sup>Required</sup> <a name="RefreshToken" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.refreshToken"></a>

```csharp
public string RefreshToken { get; }
```

- *Type:* string

---

##### `UserManagedClientApplicationClientSecret`<sup>Required</sup> <a name="UserManagedClientApplicationClientSecret" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret"></a>

```csharp
public string UserManagedClientApplicationClientSecret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.internalValue"></a>

```csharp
public DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a>

---


### DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference <a name="DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.authorizationCodeProperties">AuthorizationCodeProperties</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList">DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2ClientApplication">Oauth2ClientApplication</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList">DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2Credentials">Oauth2Credentials</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList">DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2GrantType">Oauth2GrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlParametersMap">TokenUrlParametersMap</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2Properties">DataAwsGlueConnectionAuthenticationConfigurationOauth2Properties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationCodeProperties`<sup>Required</sup> <a name="AuthorizationCodeProperties" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.authorizationCodeProperties"></a>

```csharp
public DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList AuthorizationCodeProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList">DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesList</a>

---

##### `Oauth2ClientApplication`<sup>Required</sup> <a name="Oauth2ClientApplication" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2ClientApplication"></a>

```csharp
public DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList Oauth2ClientApplication { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList">DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationList</a>

---

##### `Oauth2Credentials`<sup>Required</sup> <a name="Oauth2Credentials" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2Credentials"></a>

```csharp
public DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList Oauth2Credentials { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList">DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsList</a>

---

##### `Oauth2GrantType`<sup>Required</sup> <a name="Oauth2GrantType" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2GrantType"></a>

```csharp
public string Oauth2GrantType { get; }
```

- *Type:* string

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; }
```

- *Type:* string

---

##### `TokenUrlParametersMap`<sup>Required</sup> <a name="TokenUrlParametersMap" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlParametersMap"></a>

```csharp
public StringMap TokenUrlParametersMap { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsGlueConnectionAuthenticationConfigurationOauth2Properties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2Properties">DataAwsGlueConnectionAuthenticationConfigurationOauth2Properties</a>

---


### DataAwsGlueConnectionAuthenticationConfigurationOutputReference <a name="DataAwsGlueConnectionAuthenticationConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsGlueConnectionAuthenticationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials">BasicAuthenticationCredentials</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList">DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials">CustomAuthenticationCredentials</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.property.oauth2Properties">Oauth2Properties</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList">DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfiguration">DataAwsGlueConnectionAuthenticationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `BasicAuthenticationCredentials`<sup>Required</sup> <a name="BasicAuthenticationCredentials" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials"></a>

```csharp
public DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList BasicAuthenticationCredentials { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList">DataAwsGlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsList</a>

---

##### `CustomAuthenticationCredentials`<sup>Required</sup> <a name="CustomAuthenticationCredentials" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials"></a>

```csharp
public StringMap CustomAuthenticationCredentials { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `Oauth2Properties`<sup>Required</sup> <a name="Oauth2Properties" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.property.oauth2Properties"></a>

```csharp
public DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList Oauth2Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList">DataAwsGlueConnectionAuthenticationConfigurationOauth2PropertiesList</a>

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsGlueConnectionAuthenticationConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionAuthenticationConfiguration">DataAwsGlueConnectionAuthenticationConfiguration</a>

---


### DataAwsGlueConnectionPhysicalConnectionRequirementsList <a name="DataAwsGlueConnectionPhysicalConnectionRequirementsList" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsGlueConnectionPhysicalConnectionRequirementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList.get"></a>

```csharp
private DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference <a name="DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList">SecurityGroupIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirements">DataAwsGlueConnectionPhysicalConnectionRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `SecurityGroupIdList`<sup>Required</sup> <a name="SecurityGroupIdList" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList"></a>

```csharp
public string[] SecurityGroupIdList { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirementsOutputReference.property.internalValue"></a>

```csharp
public DataAwsGlueConnectionPhysicalConnectionRequirements InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueConnection.DataAwsGlueConnectionPhysicalConnectionRequirements">DataAwsGlueConnectionPhysicalConnectionRequirements</a>

---



