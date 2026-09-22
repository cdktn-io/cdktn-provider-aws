# `dataAwsRdsEvents` Submodule <a name="`dataAwsRdsEvents` Submodule" id="@cdktn/provider-aws.dataAwsRdsEvents"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRdsEvents <a name="DataAwsRdsEvents" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/rds_events aws_rds_events}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRdsEvents(Construct Scope, string Id, DataAwsRdsEventsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig">DataAwsRdsEventsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig">DataAwsRdsEventsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetEventCategories">ResetEventCategories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetSourceIdentifier">ResetSourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetSourceType">ResetSourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDuration` <a name="ResetDuration" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetDuration"></a>

```csharp
private void ResetDuration()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetEventCategories` <a name="ResetEventCategories" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetEventCategories"></a>

```csharp
private void ResetEventCategories()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSourceIdentifier` <a name="ResetSourceIdentifier" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetSourceIdentifier"></a>

```csharp
private void ResetSourceIdentifier()
```

##### `ResetSourceType` <a name="ResetSourceType" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetSourceType"></a>

```csharp
private void ResetSourceType()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.resetStartTime"></a>

```csharp
private void ResetStartTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsRdsEvents resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRdsEvents.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRdsEvents.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRdsEvents.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsRdsEvents.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsRdsEvents resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsRdsEvents to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsRdsEvents that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/rds_events#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsRdsEvents to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.events">Events</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList">DataAwsRdsEventsEventsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.durationInput">DurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.eventCategoriesInput">EventCategoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.sourceIdentifierInput">SourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.sourceTypeInput">SourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.duration">Duration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.eventCategories">EventCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.sourceIdentifier">SourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.events"></a>

```csharp
public DataAwsRdsEventsEventsList Events { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList">DataAwsRdsEventsEventsList</a>

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.durationInput"></a>

```csharp
public double DurationInput { get; }
```

- *Type:* double

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `EventCategoriesInput`<sup>Optional</sup> <a name="EventCategoriesInput" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.eventCategoriesInput"></a>

```csharp
public string[] EventCategoriesInput { get; }
```

- *Type:* string[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SourceIdentifierInput`<sup>Optional</sup> <a name="SourceIdentifierInput" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.sourceIdentifierInput"></a>

```csharp
public string SourceIdentifierInput { get; }
```

- *Type:* string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.sourceTypeInput"></a>

```csharp
public string SourceTypeInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.duration"></a>

```csharp
public double Duration { get; }
```

- *Type:* double

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `EventCategories`<sup>Required</sup> <a name="EventCategories" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.eventCategories"></a>

```csharp
public string[] EventCategories { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SourceIdentifier`<sup>Required</sup> <a name="SourceIdentifier" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.sourceIdentifier"></a>

```csharp
public string SourceIdentifier { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEvents.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRdsEventsConfig <a name="DataAwsRdsEventsConfig" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRdsEventsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double Duration = null,
    string EndTime = null,
    string[] EventCategories = null,
    string Region = null,
    string SourceIdentifier = null,
    string SourceType = null,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.duration">Duration</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/rds_events#duration DataAwsRdsEvents#duration}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.endTime">EndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/rds_events#end_time DataAwsRdsEvents#end_time}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.eventCategories">EventCategories</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/rds_events#event_categories DataAwsRdsEvents#event_categories}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.sourceIdentifier">SourceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/rds_events#source_identifier DataAwsRdsEvents#source_identifier}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.sourceType">SourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/rds_events#source_type DataAwsRdsEvents#source_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/rds_events#start_time DataAwsRdsEvents#start_time}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.duration"></a>

```csharp
public double Duration { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/rds_events#duration DataAwsRdsEvents#duration}.

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/rds_events#end_time DataAwsRdsEvents#end_time}.

---

##### `EventCategories`<sup>Optional</sup> <a name="EventCategories" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.eventCategories"></a>

```csharp
public string[] EventCategories { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/rds_events#event_categories DataAwsRdsEvents#event_categories}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/rds_events#region DataAwsRdsEvents#region}

---

##### `SourceIdentifier`<sup>Optional</sup> <a name="SourceIdentifier" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.sourceIdentifier"></a>

```csharp
public string SourceIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/rds_events#source_identifier DataAwsRdsEvents#source_identifier}.

---

##### `SourceType`<sup>Optional</sup> <a name="SourceType" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.sourceType"></a>

```csharp
public string SourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/rds_events#source_type DataAwsRdsEvents#source_type}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsConfig.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/rds_events#start_time DataAwsRdsEvents#start_time}.

---

### DataAwsRdsEventsEvents <a name="DataAwsRdsEventsEvents" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEvents.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRdsEventsEvents {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRdsEventsEventsList <a name="DataAwsRdsEventsEventsList" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRdsEventsEventsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.get"></a>

```csharp
private DataAwsRdsEventsEventsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsRdsEventsEventsOutputReference <a name="DataAwsRdsEventsEventsOutputReference" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsRdsEventsEventsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.date">Date</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.eventCategories">EventCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.sourceArn">SourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.sourceIdentifier">SourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEvents">DataAwsRdsEventsEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Date`<sup>Required</sup> <a name="Date" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.date"></a>

```csharp
public string Date { get; }
```

- *Type:* string

---

##### `EventCategories`<sup>Required</sup> <a name="EventCategories" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.eventCategories"></a>

```csharp
public string[] EventCategories { get; }
```

- *Type:* string[]

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.sourceArn"></a>

```csharp
public string SourceArn { get; }
```

- *Type:* string

---

##### `SourceIdentifier`<sup>Required</sup> <a name="SourceIdentifier" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.sourceIdentifier"></a>

```csharp
public string SourceIdentifier { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEventsOutputReference.property.internalValue"></a>

```csharp
public DataAwsRdsEventsEvents InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsRdsEvents.DataAwsRdsEventsEvents">DataAwsRdsEventsEvents</a>

---



