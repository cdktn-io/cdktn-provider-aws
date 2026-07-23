# `dataAwsGuarddutyFindingIds` Submodule <a name="`dataAwsGuarddutyFindingIds` Submodule" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsGuarddutyFindingIds <a name="DataAwsGuarddutyFindingIds" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/guardduty_finding_ids aws_guardduty_finding_ids}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsGuarddutyFindingIds(Construct Scope, string Id, DataAwsGuarddutyFindingIdsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig">DataAwsGuarddutyFindingIdsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig">DataAwsGuarddutyFindingIdsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsGuarddutyFindingIds resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsGuarddutyFindingIds.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsGuarddutyFindingIds.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsGuarddutyFindingIds.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DataAwsGuarddutyFindingIds.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsGuarddutyFindingIds resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsGuarddutyFindingIds to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsGuarddutyFindingIds that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/guardduty_finding_ids#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsGuarddutyFindingIds to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.findingIds">FindingIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.hasFindings">HasFindings</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.detectorIdInput">DetectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.detectorId">DetectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `FindingIds`<sup>Required</sup> <a name="FindingIds" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.findingIds"></a>

```csharp
public string[] FindingIds { get; }
```

- *Type:* string[]

---

##### `HasFindings`<sup>Required</sup> <a name="HasFindings" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.hasFindings"></a>

```csharp
public IResolvable HasFindings { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `DetectorIdInput`<sup>Optional</sup> <a name="DetectorIdInput" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.detectorIdInput"></a>

```csharp
public string DetectorIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `DetectorId`<sup>Required</sup> <a name="DetectorId" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.detectorId"></a>

```csharp
public string DetectorId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIds.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsGuarddutyFindingIdsConfig <a name="DataAwsGuarddutyFindingIdsConfig" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DataAwsGuarddutyFindingIdsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DetectorId,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.detectorId">DetectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/guardduty_finding_ids#detector_id DataAwsGuarddutyFindingIds#detector_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DetectorId`<sup>Required</sup> <a name="DetectorId" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.detectorId"></a>

```csharp
public string DetectorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/guardduty_finding_ids#detector_id DataAwsGuarddutyFindingIds#detector_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dataAwsGuarddutyFindingIds.DataAwsGuarddutyFindingIdsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/guardduty_finding_ids#region DataAwsGuarddutyFindingIds#region}

---



