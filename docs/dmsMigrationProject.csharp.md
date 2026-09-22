# `dmsMigrationProject` Submodule <a name="`dmsMigrationProject` Submodule" id="@cdktn/provider-aws.dmsMigrationProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsMigrationProject <a name="DmsMigrationProject" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project aws_dms_migration_project}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsMigrationProject(Construct Scope, string Id, DmsMigrationProjectConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig">DmsMigrationProjectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig">DmsMigrationProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putSchemaConversionApplicationAttributes">PutSchemaConversionApplicationAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putSourceDataProviderDescriptor">PutSourceDataProviderDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putTargetDataProviderDescriptor">PutTargetDataProviderDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetSchemaConversionApplicationAttributes">ResetSchemaConversionApplicationAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetSourceDataProviderDescriptor">ResetSourceDataProviderDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTargetDataProviderDescriptor">ResetTargetDataProviderDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTransformationRules">ResetTransformationRules</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSchemaConversionApplicationAttributes` <a name="PutSchemaConversionApplicationAttributes" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putSchemaConversionApplicationAttributes"></a>

```csharp
private void PutSchemaConversionApplicationAttributes(IResolvable|DmsMigrationProjectSchemaConversionApplicationAttributes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putSchemaConversionApplicationAttributes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>[]

---

##### `PutSourceDataProviderDescriptor` <a name="PutSourceDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putSourceDataProviderDescriptor"></a>

```csharp
private void PutSourceDataProviderDescriptor(IResolvable|DmsMigrationProjectSourceDataProviderDescriptor[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putSourceDataProviderDescriptor.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>[]

---

##### `PutTargetDataProviderDescriptor` <a name="PutTargetDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putTargetDataProviderDescriptor"></a>

```csharp
private void PutTargetDataProviderDescriptor(IResolvable|DmsMigrationProjectTargetDataProviderDescriptor[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putTargetDataProviderDescriptor.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putTimeouts"></a>

```csharp
private void PutTimeouts(DmsMigrationProjectTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSchemaConversionApplicationAttributes` <a name="ResetSchemaConversionApplicationAttributes" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetSchemaConversionApplicationAttributes"></a>

```csharp
private void ResetSchemaConversionApplicationAttributes()
```

##### `ResetSourceDataProviderDescriptor` <a name="ResetSourceDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetSourceDataProviderDescriptor"></a>

```csharp
private void ResetSourceDataProviderDescriptor()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTargetDataProviderDescriptor` <a name="ResetTargetDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTargetDataProviderDescriptor"></a>

```csharp
private void ResetTargetDataProviderDescriptor()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTransformationRules` <a name="ResetTransformationRules" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTransformationRules"></a>

```csharp
private void ResetTransformationRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DmsMigrationProject resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DmsMigrationProject.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DmsMigrationProject.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DmsMigrationProject.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DmsMigrationProject.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DmsMigrationProject resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DmsMigrationProject to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DmsMigrationProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DmsMigrationProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.instanceProfileName">InstanceProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributes">SchemaConversionApplicationAttributes</a></code> | <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList">DmsMigrationProjectSchemaConversionApplicationAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptor">SourceDataProviderDescriptor</a></code> | <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList">DmsMigrationProjectSourceDataProviderDescriptorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptor">TargetDataProviderDescriptor</a></code> | <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList">DmsMigrationProjectTargetDataProviderDescriptorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference">DmsMigrationProjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArnInput">InstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributesInput">SchemaConversionApplicationAttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptorInput">SourceDataProviderDescriptorInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptorInput">TargetDataProviderDescriptorInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.transformationRulesInput">TransformationRulesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.transformationRules">TransformationRules</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `InstanceProfileName`<sup>Required</sup> <a name="InstanceProfileName" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.instanceProfileName"></a>

```csharp
public string InstanceProfileName { get; }
```

- *Type:* string

---

##### `SchemaConversionApplicationAttributes`<sup>Required</sup> <a name="SchemaConversionApplicationAttributes" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributes"></a>

```csharp
public DmsMigrationProjectSchemaConversionApplicationAttributesList SchemaConversionApplicationAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList">DmsMigrationProjectSchemaConversionApplicationAttributesList</a>

---

##### `SourceDataProviderDescriptor`<sup>Required</sup> <a name="SourceDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptor"></a>

```csharp
public DmsMigrationProjectSourceDataProviderDescriptorList SourceDataProviderDescriptor { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList">DmsMigrationProjectSourceDataProviderDescriptorList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `TargetDataProviderDescriptor`<sup>Required</sup> <a name="TargetDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptor"></a>

```csharp
public DmsMigrationProjectTargetDataProviderDescriptorList TargetDataProviderDescriptor { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList">DmsMigrationProjectTargetDataProviderDescriptorList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.timeouts"></a>

```csharp
public DmsMigrationProjectTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference">DmsMigrationProjectTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `InstanceProfileArnInput`<sup>Optional</sup> <a name="InstanceProfileArnInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArnInput"></a>

```csharp
public string InstanceProfileArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SchemaConversionApplicationAttributesInput`<sup>Optional</sup> <a name="SchemaConversionApplicationAttributesInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributesInput"></a>

```csharp
public IResolvable|DmsMigrationProjectSchemaConversionApplicationAttributes[] SchemaConversionApplicationAttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>[]

---

##### `SourceDataProviderDescriptorInput`<sup>Optional</sup> <a name="SourceDataProviderDescriptorInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptorInput"></a>

```csharp
public IResolvable|DmsMigrationProjectSourceDataProviderDescriptor[] SourceDataProviderDescriptorInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetDataProviderDescriptorInput`<sup>Optional</sup> <a name="TargetDataProviderDescriptorInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptorInput"></a>

```csharp
public IResolvable|DmsMigrationProjectTargetDataProviderDescriptor[] TargetDataProviderDescriptorInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.timeoutsInput"></a>

```csharp
public IResolvable|DmsMigrationProjectTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a>

---

##### `TransformationRulesInput`<sup>Optional</sup> <a name="TransformationRulesInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.transformationRulesInput"></a>

```csharp
public string TransformationRulesInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InstanceProfileArn`<sup>Required</sup> <a name="InstanceProfileArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArn"></a>

```csharp
public string InstanceProfileArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TransformationRules`<sup>Required</sup> <a name="TransformationRules" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.transformationRules"></a>

```csharp
public string TransformationRules { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsMigrationProjectConfig <a name="DmsMigrationProjectConfig" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsMigrationProjectConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InstanceProfileArn,
    string Description = null,
    string Name = null,
    string Region = null,
    IResolvable|DmsMigrationProjectSchemaConversionApplicationAttributes[] SchemaConversionApplicationAttributes = null,
    IResolvable|DmsMigrationProjectSourceDataProviderDescriptor[] SourceDataProviderDescriptor = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    IResolvable|DmsMigrationProjectTargetDataProviderDescriptor[] TargetDataProviderDescriptor = null,
    DmsMigrationProjectTimeouts Timeouts = null,
    string TransformationRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#instance_profile_arn DmsMigrationProject#instance_profile_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#description DmsMigrationProject#description}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#name DmsMigrationProject#name}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.schemaConversionApplicationAttributes">SchemaConversionApplicationAttributes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>[]</code> | schema_conversion_application_attributes block. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.sourceDataProviderDescriptor">SourceDataProviderDescriptor</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>[]</code> | source_data_provider_descriptor block. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#tags DmsMigrationProject#tags}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.targetDataProviderDescriptor">TargetDataProviderDescriptor</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>[]</code> | target_data_provider_descriptor block. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.transformationRules">TransformationRules</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#transformation_rules DmsMigrationProject#transformation_rules}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InstanceProfileArn`<sup>Required</sup> <a name="InstanceProfileArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileArn"></a>

```csharp
public string InstanceProfileArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#instance_profile_arn DmsMigrationProject#instance_profile_arn}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#description DmsMigrationProject#description}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#name DmsMigrationProject#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#region DmsMigrationProject#region}

---

##### `SchemaConversionApplicationAttributes`<sup>Optional</sup> <a name="SchemaConversionApplicationAttributes" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.schemaConversionApplicationAttributes"></a>

```csharp
public IResolvable|DmsMigrationProjectSchemaConversionApplicationAttributes[] SchemaConversionApplicationAttributes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>[]

schema_conversion_application_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#schema_conversion_application_attributes DmsMigrationProject#schema_conversion_application_attributes}

---

##### `SourceDataProviderDescriptor`<sup>Optional</sup> <a name="SourceDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.sourceDataProviderDescriptor"></a>

```csharp
public IResolvable|DmsMigrationProjectSourceDataProviderDescriptor[] SourceDataProviderDescriptor { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>[]

source_data_provider_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#source_data_provider_descriptor DmsMigrationProject#source_data_provider_descriptor}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#tags DmsMigrationProject#tags}.

---

##### `TargetDataProviderDescriptor`<sup>Optional</sup> <a name="TargetDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.targetDataProviderDescriptor"></a>

```csharp
public IResolvable|DmsMigrationProjectTargetDataProviderDescriptor[] TargetDataProviderDescriptor { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>[]

target_data_provider_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#target_data_provider_descriptor DmsMigrationProject#target_data_provider_descriptor}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.timeouts"></a>

```csharp
public DmsMigrationProjectTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#timeouts DmsMigrationProject#timeouts}

---

##### `TransformationRules`<sup>Optional</sup> <a name="TransformationRules" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.transformationRules"></a>

```csharp
public string TransformationRules { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#transformation_rules DmsMigrationProject#transformation_rules}.

---

### DmsMigrationProjectSchemaConversionApplicationAttributes <a name="DmsMigrationProjectSchemaConversionApplicationAttributes" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsMigrationProjectSchemaConversionApplicationAttributes {
    string S3BucketPath = null,
    string S3BucketRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketPath">S3BucketPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#s3_bucket_path DmsMigrationProject#s3_bucket_path}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketRoleArn">S3BucketRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#s3_bucket_role_arn DmsMigrationProject#s3_bucket_role_arn}. |

---

##### `S3BucketPath`<sup>Optional</sup> <a name="S3BucketPath" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketPath"></a>

```csharp
public string S3BucketPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#s3_bucket_path DmsMigrationProject#s3_bucket_path}.

---

##### `S3BucketRoleArn`<sup>Optional</sup> <a name="S3BucketRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketRoleArn"></a>

```csharp
public string S3BucketRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#s3_bucket_role_arn DmsMigrationProject#s3_bucket_role_arn}.

---

### DmsMigrationProjectSourceDataProviderDescriptor <a name="DmsMigrationProjectSourceDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsMigrationProjectSourceDataProviderDescriptor {
    string DataProviderArn,
    string SecretsManagerAccessRoleArn = null,
    string SecretsManagerSecretId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.property.dataProviderArn">DataProviderArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}. |

---

##### `DataProviderArn`<sup>Required</sup> <a name="DataProviderArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.property.dataProviderArn"></a>

```csharp
public string DataProviderArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}.

---

##### `SecretsManagerAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}.

---

##### `SecretsManagerSecretId`<sup>Optional</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}.

---

### DmsMigrationProjectTargetDataProviderDescriptor <a name="DmsMigrationProjectTargetDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsMigrationProjectTargetDataProviderDescriptor {
    string DataProviderArn,
    string SecretsManagerAccessRoleArn = null,
    string SecretsManagerSecretId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.property.dataProviderArn">DataProviderArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}. |

---

##### `DataProviderArn`<sup>Required</sup> <a name="DataProviderArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.property.dataProviderArn"></a>

```csharp
public string DataProviderArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}.

---

##### `SecretsManagerAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}.

---

##### `SecretsManagerSecretId`<sup>Optional</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}.

---

### DmsMigrationProjectTimeouts <a name="DmsMigrationProjectTimeouts" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsMigrationProjectTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#create DmsMigrationProject#create}

---

## Classes <a name="Classes" id="Classes"></a>

### DmsMigrationProjectSchemaConversionApplicationAttributesList <a name="DmsMigrationProjectSchemaConversionApplicationAttributesList" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsMigrationProjectSchemaConversionApplicationAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.get"></a>

```csharp
private DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.property.internalValue"></a>

```csharp
public IResolvable|DmsMigrationProjectSchemaConversionApplicationAttributes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>[]

---


### DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference <a name="DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketPath">ResetS3BucketPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketRoleArn">ResetS3BucketRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3BucketPath` <a name="ResetS3BucketPath" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketPath"></a>

```csharp
private void ResetS3BucketPath()
```

##### `ResetS3BucketRoleArn` <a name="ResetS3BucketRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketRoleArn"></a>

```csharp
private void ResetS3BucketRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPathInput">S3BucketPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArnInput">S3BucketRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPath">S3BucketPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArn">S3BucketRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3BucketPathInput`<sup>Optional</sup> <a name="S3BucketPathInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPathInput"></a>

```csharp
public string S3BucketPathInput { get; }
```

- *Type:* string

---

##### `S3BucketRoleArnInput`<sup>Optional</sup> <a name="S3BucketRoleArnInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArnInput"></a>

```csharp
public string S3BucketRoleArnInput { get; }
```

- *Type:* string

---

##### `S3BucketPath`<sup>Required</sup> <a name="S3BucketPath" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPath"></a>

```csharp
public string S3BucketPath { get; }
```

- *Type:* string

---

##### `S3BucketRoleArn`<sup>Required</sup> <a name="S3BucketRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArn"></a>

```csharp
public string S3BucketRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsMigrationProjectSchemaConversionApplicationAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>

---


### DmsMigrationProjectSourceDataProviderDescriptorList <a name="DmsMigrationProjectSourceDataProviderDescriptorList" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsMigrationProjectSourceDataProviderDescriptorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.get"></a>

```csharp
private DmsMigrationProjectSourceDataProviderDescriptorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.property.internalValue"></a>

```csharp
public IResolvable|DmsMigrationProjectSourceDataProviderDescriptor[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>[]

---


### DmsMigrationProjectSourceDataProviderDescriptorOutputReference <a name="DmsMigrationProjectSourceDataProviderDescriptorOutputReference" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsMigrationProjectSourceDataProviderDescriptorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resetSecretsManagerAccessRoleArn">ResetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resetSecretsManagerSecretId">ResetSecretsManagerSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretsManagerAccessRoleArn` <a name="ResetSecretsManagerAccessRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resetSecretsManagerAccessRoleArn"></a>

```csharp
private void ResetSecretsManagerAccessRoleArn()
```

##### `ResetSecretsManagerSecretId` <a name="ResetSecretsManagerSecretId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resetSecretsManagerSecretId"></a>

```csharp
private void ResetSecretsManagerSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.dataProviderName">DataProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.dataProviderArnInput">DataProviderArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArnInput">SecretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerSecretIdInput">SecretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.dataProviderArn">DataProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataProviderName`<sup>Required</sup> <a name="DataProviderName" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.dataProviderName"></a>

```csharp
public string DataProviderName { get; }
```

- *Type:* string

---

##### `DataProviderArnInput`<sup>Optional</sup> <a name="DataProviderArnInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.dataProviderArnInput"></a>

```csharp
public string DataProviderArnInput { get; }
```

- *Type:* string

---

##### `SecretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArnInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```csharp
public string SecretsManagerAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerSecretIdInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerSecretIdInput"></a>

```csharp
public string SecretsManagerSecretIdInput { get; }
```

- *Type:* string

---

##### `DataProviderArn`<sup>Required</sup> <a name="DataProviderArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.dataProviderArn"></a>

```csharp
public string DataProviderArn { get; }
```

- *Type:* string

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsMigrationProjectSourceDataProviderDescriptor InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>

---


### DmsMigrationProjectTargetDataProviderDescriptorList <a name="DmsMigrationProjectTargetDataProviderDescriptorList" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsMigrationProjectTargetDataProviderDescriptorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.get"></a>

```csharp
private DmsMigrationProjectTargetDataProviderDescriptorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.property.internalValue"></a>

```csharp
public IResolvable|DmsMigrationProjectTargetDataProviderDescriptor[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>[]

---


### DmsMigrationProjectTargetDataProviderDescriptorOutputReference <a name="DmsMigrationProjectTargetDataProviderDescriptorOutputReference" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsMigrationProjectTargetDataProviderDescriptorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resetSecretsManagerAccessRoleArn">ResetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resetSecretsManagerSecretId">ResetSecretsManagerSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretsManagerAccessRoleArn` <a name="ResetSecretsManagerAccessRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resetSecretsManagerAccessRoleArn"></a>

```csharp
private void ResetSecretsManagerAccessRoleArn()
```

##### `ResetSecretsManagerSecretId` <a name="ResetSecretsManagerSecretId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resetSecretsManagerSecretId"></a>

```csharp
private void ResetSecretsManagerSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.dataProviderName">DataProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.dataProviderArnInput">DataProviderArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArnInput">SecretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerSecretIdInput">SecretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.dataProviderArn">DataProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArn">SecretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerSecretId">SecretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataProviderName`<sup>Required</sup> <a name="DataProviderName" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.dataProviderName"></a>

```csharp
public string DataProviderName { get; }
```

- *Type:* string

---

##### `DataProviderArnInput`<sup>Optional</sup> <a name="DataProviderArnInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.dataProviderArnInput"></a>

```csharp
public string DataProviderArnInput { get; }
```

- *Type:* string

---

##### `SecretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerAccessRoleArnInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```csharp
public string SecretsManagerAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerSecretIdInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerSecretIdInput"></a>

```csharp
public string SecretsManagerSecretIdInput { get; }
```

- *Type:* string

---

##### `DataProviderArn`<sup>Required</sup> <a name="DataProviderArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.dataProviderArn"></a>

```csharp
public string DataProviderArn { get; }
```

- *Type:* string

---

##### `SecretsManagerAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerAccessRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArn"></a>

```csharp
public string SecretsManagerAccessRoleArn { get; }
```

- *Type:* string

---

##### `SecretsManagerSecretId`<sup>Required</sup> <a name="SecretsManagerSecretId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerSecretId"></a>

```csharp
public string SecretsManagerSecretId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsMigrationProjectTargetDataProviderDescriptor InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>

---


### DmsMigrationProjectTimeoutsOutputReference <a name="DmsMigrationProjectTimeoutsOutputReference" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DmsMigrationProjectTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DmsMigrationProjectTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a>

---



