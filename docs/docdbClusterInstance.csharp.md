# `docdbClusterInstance` Submodule <a name="`docdbClusterInstance` Submodule" id="@cdktn/provider-aws.docdbClusterInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocdbClusterInstance <a name="DocdbClusterInstance" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance aws_docdb_cluster_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DocdbClusterInstance(Construct Scope, string Id, DocdbClusterInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig">DocdbClusterInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig">DocdbClusterInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetApplyImmediately">ResetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetAutoMinorVersionUpgrade">ResetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetCaCertIdentifier">ResetCaCertIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetCertificateRotationRestart">ResetCertificateRotationRestart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetCopyTagsToSnapshot">ResetCopyTagsToSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetEnablePerformanceInsights">ResetEnablePerformanceInsights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetIdentifier">ResetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetIdentifierPrefix">ResetIdentifierPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetPerformanceInsightsKmsKeyId">ResetPerformanceInsightsKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetPromotionTier">ResetPromotionTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(DocdbClusterInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts">DocdbClusterInstanceTimeouts</a>

---

##### `ResetApplyImmediately` <a name="ResetApplyImmediately" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetApplyImmediately"></a>

```csharp
private void ResetApplyImmediately()
```

##### `ResetAutoMinorVersionUpgrade` <a name="ResetAutoMinorVersionUpgrade" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetAutoMinorVersionUpgrade"></a>

```csharp
private void ResetAutoMinorVersionUpgrade()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetCaCertIdentifier` <a name="ResetCaCertIdentifier" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetCaCertIdentifier"></a>

```csharp
private void ResetCaCertIdentifier()
```

##### `ResetCertificateRotationRestart` <a name="ResetCertificateRotationRestart" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetCertificateRotationRestart"></a>

```csharp
private void ResetCertificateRotationRestart()
```

##### `ResetCopyTagsToSnapshot` <a name="ResetCopyTagsToSnapshot" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetCopyTagsToSnapshot"></a>

```csharp
private void ResetCopyTagsToSnapshot()
```

##### `ResetEnablePerformanceInsights` <a name="ResetEnablePerformanceInsights" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetEnablePerformanceInsights"></a>

```csharp
private void ResetEnablePerformanceInsights()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetEngine"></a>

```csharp
private void ResetEngine()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentifier` <a name="ResetIdentifier" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetIdentifier"></a>

```csharp
private void ResetIdentifier()
```

##### `ResetIdentifierPrefix` <a name="ResetIdentifierPrefix" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetIdentifierPrefix"></a>

```csharp
private void ResetIdentifierPrefix()
```

##### `ResetPerformanceInsightsKmsKeyId` <a name="ResetPerformanceInsightsKmsKeyId" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetPerformanceInsightsKmsKeyId"></a>

```csharp
private void ResetPerformanceInsightsKmsKeyId()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetPreferredMaintenanceWindow"></a>

```csharp
private void ResetPreferredMaintenanceWindow()
```

##### `ResetPromotionTier` <a name="ResetPromotionTier" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetPromotionTier"></a>

```csharp
private void ResetPromotionTier()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DocdbClusterInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DocdbClusterInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DocdbClusterInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DocdbClusterInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

DocdbClusterInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DocdbClusterInstance resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DocdbClusterInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DocdbClusterInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DocdbClusterInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.dbiResourceId">DbiResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.dbSubnetGroupName">DbSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.storageEncrypted">StorageEncrypted</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference">DocdbClusterInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.writer">Writer</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.applyImmediatelyInput">ApplyImmediatelyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.autoMinorVersionUpgradeInput">AutoMinorVersionUpgradeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.caCertIdentifierInput">CaCertIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.certificateRotationRestartInput">CertificateRotationRestartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.clusterIdentifierInput">ClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.copyTagsToSnapshotInput">CopyTagsToSnapshotInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.enablePerformanceInsightsInput">EnablePerformanceInsightsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.identifierPrefixInput">IdentifierPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.instanceClassInput">InstanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.performanceInsightsKmsKeyIdInput">PerformanceInsightsKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.promotionTierInput">PromotionTierInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts">DocdbClusterInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.applyImmediately">ApplyImmediately</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.caCertIdentifier">CaCertIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.certificateRotationRestart">CertificateRotationRestart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.copyTagsToSnapshot">CopyTagsToSnapshot</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.enablePerformanceInsights">EnablePerformanceInsights</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.identifierPrefix">IdentifierPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.instanceClass">InstanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.performanceInsightsKmsKeyId">PerformanceInsightsKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.promotionTier">PromotionTier</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DbiResourceId`<sup>Required</sup> <a name="DbiResourceId" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.dbiResourceId"></a>

```csharp
public string DbiResourceId { get; }
```

- *Type:* string

---

##### `DbSubnetGroupName`<sup>Required</sup> <a name="DbSubnetGroupName" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.dbSubnetGroupName"></a>

```csharp
public string DbSubnetGroupName { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PreferredBackupWindow`<sup>Required</sup> <a name="PreferredBackupWindow" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.preferredBackupWindow"></a>

```csharp
public string PreferredBackupWindow { get; }
```

- *Type:* string

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.publiclyAccessible"></a>

```csharp
public IResolvable PubliclyAccessible { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `StorageEncrypted`<sup>Required</sup> <a name="StorageEncrypted" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.storageEncrypted"></a>

```csharp
public IResolvable StorageEncrypted { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.timeouts"></a>

```csharp
public DocdbClusterInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference">DocdbClusterInstanceTimeoutsOutputReference</a>

---

##### `Writer`<sup>Required</sup> <a name="Writer" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.writer"></a>

```csharp
public IResolvable Writer { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ApplyImmediatelyInput`<sup>Optional</sup> <a name="ApplyImmediatelyInput" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.applyImmediatelyInput"></a>

```csharp
public bool|IResolvable ApplyImmediatelyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="AutoMinorVersionUpgradeInput" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.autoMinorVersionUpgradeInput"></a>

```csharp
public bool|IResolvable AutoMinorVersionUpgradeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `CaCertIdentifierInput`<sup>Optional</sup> <a name="CaCertIdentifierInput" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.caCertIdentifierInput"></a>

```csharp
public string CaCertIdentifierInput { get; }
```

- *Type:* string

---

##### `CertificateRotationRestartInput`<sup>Optional</sup> <a name="CertificateRotationRestartInput" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.certificateRotationRestartInput"></a>

```csharp
public string CertificateRotationRestartInput { get; }
```

- *Type:* string

---

##### `ClusterIdentifierInput`<sup>Optional</sup> <a name="ClusterIdentifierInput" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.clusterIdentifierInput"></a>

```csharp
public string ClusterIdentifierInput { get; }
```

- *Type:* string

---

##### `CopyTagsToSnapshotInput`<sup>Optional</sup> <a name="CopyTagsToSnapshotInput" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.copyTagsToSnapshotInput"></a>

```csharp
public bool|IResolvable CopyTagsToSnapshotInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnablePerformanceInsightsInput`<sup>Optional</sup> <a name="EnablePerformanceInsightsInput" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.enablePerformanceInsightsInput"></a>

```csharp
public bool|IResolvable EnablePerformanceInsightsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `IdentifierPrefixInput`<sup>Optional</sup> <a name="IdentifierPrefixInput" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.identifierPrefixInput"></a>

```csharp
public string IdentifierPrefixInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceClassInput`<sup>Optional</sup> <a name="InstanceClassInput" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.instanceClassInput"></a>

```csharp
public string InstanceClassInput { get; }
```

- *Type:* string

---

##### `PerformanceInsightsKmsKeyIdInput`<sup>Optional</sup> <a name="PerformanceInsightsKmsKeyIdInput" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.performanceInsightsKmsKeyIdInput"></a>

```csharp
public string PerformanceInsightsKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.preferredMaintenanceWindowInput"></a>

```csharp
public string PreferredMaintenanceWindowInput { get; }
```

- *Type:* string

---

##### `PromotionTierInput`<sup>Optional</sup> <a name="PromotionTierInput" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.promotionTierInput"></a>

```csharp
public double PromotionTierInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.timeoutsInput"></a>

```csharp
public IResolvable|DocdbClusterInstanceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts">DocdbClusterInstanceTimeouts</a>

---

##### `ApplyImmediately`<sup>Required</sup> <a name="ApplyImmediately" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.applyImmediately"></a>

```csharp
public bool|IResolvable ApplyImmediately { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AutoMinorVersionUpgrade`<sup>Required</sup> <a name="AutoMinorVersionUpgrade" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.autoMinorVersionUpgrade"></a>

```csharp
public bool|IResolvable AutoMinorVersionUpgrade { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `CaCertIdentifier`<sup>Required</sup> <a name="CaCertIdentifier" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.caCertIdentifier"></a>

```csharp
public string CaCertIdentifier { get; }
```

- *Type:* string

---

##### `CertificateRotationRestart`<sup>Required</sup> <a name="CertificateRotationRestart" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.certificateRotationRestart"></a>

```csharp
public string CertificateRotationRestart { get; }
```

- *Type:* string

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; }
```

- *Type:* string

---

##### `CopyTagsToSnapshot`<sup>Required</sup> <a name="CopyTagsToSnapshot" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.copyTagsToSnapshot"></a>

```csharp
public bool|IResolvable CopyTagsToSnapshot { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnablePerformanceInsights`<sup>Required</sup> <a name="EnablePerformanceInsights" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.enablePerformanceInsights"></a>

```csharp
public bool|IResolvable EnablePerformanceInsights { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `IdentifierPrefix`<sup>Required</sup> <a name="IdentifierPrefix" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.identifierPrefix"></a>

```csharp
public string IdentifierPrefix { get; }
```

- *Type:* string

---

##### `InstanceClass`<sup>Required</sup> <a name="InstanceClass" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.instanceClass"></a>

```csharp
public string InstanceClass { get; }
```

- *Type:* string

---

##### `PerformanceInsightsKmsKeyId`<sup>Required</sup> <a name="PerformanceInsightsKmsKeyId" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.performanceInsightsKmsKeyId"></a>

```csharp
public string PerformanceInsightsKmsKeyId { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; }
```

- *Type:* string

---

##### `PromotionTier`<sup>Required</sup> <a name="PromotionTier" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.promotionTier"></a>

```csharp
public double PromotionTier { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DocdbClusterInstanceConfig <a name="DocdbClusterInstanceConfig" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DocdbClusterInstanceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ClusterIdentifier,
    string InstanceClass,
    bool|IResolvable ApplyImmediately = null,
    bool|IResolvable AutoMinorVersionUpgrade = null,
    string AvailabilityZone = null,
    string CaCertIdentifier = null,
    string CertificateRotationRestart = null,
    bool|IResolvable CopyTagsToSnapshot = null,
    bool|IResolvable EnablePerformanceInsights = null,
    string Engine = null,
    string Id = null,
    string Identifier = null,
    string IdentifierPrefix = null,
    string PerformanceInsightsKmsKeyId = null,
    string PreferredMaintenanceWindow = null,
    double PromotionTier = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    DocdbClusterInstanceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.clusterIdentifier">ClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#cluster_identifier DocdbClusterInstance#cluster_identifier}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.instanceClass">InstanceClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#instance_class DocdbClusterInstance#instance_class}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.applyImmediately">ApplyImmediately</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#apply_immediately DocdbClusterInstance#apply_immediately}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#auto_minor_version_upgrade DocdbClusterInstance#auto_minor_version_upgrade}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#availability_zone DocdbClusterInstance#availability_zone}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.caCertIdentifier">CaCertIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#ca_cert_identifier DocdbClusterInstance#ca_cert_identifier}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.certificateRotationRestart">CertificateRotationRestart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#certificate_rotation_restart DocdbClusterInstance#certificate_rotation_restart}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.copyTagsToSnapshot">CopyTagsToSnapshot</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#copy_tags_to_snapshot DocdbClusterInstance#copy_tags_to_snapshot}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.enablePerformanceInsights">EnablePerformanceInsights</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#enable_performance_insights DocdbClusterInstance#enable_performance_insights}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.engine">Engine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#engine DocdbClusterInstance#engine}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#id DocdbClusterInstance#id}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.identifier">Identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#identifier DocdbClusterInstance#identifier}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.identifierPrefix">IdentifierPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#identifier_prefix DocdbClusterInstance#identifier_prefix}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.performanceInsightsKmsKeyId">PerformanceInsightsKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#performance_insights_kms_key_id DocdbClusterInstance#performance_insights_kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#preferred_maintenance_window DocdbClusterInstance#preferred_maintenance_window}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.promotionTier">PromotionTier</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#promotion_tier DocdbClusterInstance#promotion_tier}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#tags DocdbClusterInstance#tags}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#tags_all DocdbClusterInstance#tags_all}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts">DocdbClusterInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClusterIdentifier`<sup>Required</sup> <a name="ClusterIdentifier" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.clusterIdentifier"></a>

```csharp
public string ClusterIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#cluster_identifier DocdbClusterInstance#cluster_identifier}.

---

##### `InstanceClass`<sup>Required</sup> <a name="InstanceClass" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.instanceClass"></a>

```csharp
public string InstanceClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#instance_class DocdbClusterInstance#instance_class}.

---

##### `ApplyImmediately`<sup>Optional</sup> <a name="ApplyImmediately" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.applyImmediately"></a>

```csharp
public bool|IResolvable ApplyImmediately { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#apply_immediately DocdbClusterInstance#apply_immediately}.

---

##### `AutoMinorVersionUpgrade`<sup>Optional</sup> <a name="AutoMinorVersionUpgrade" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.autoMinorVersionUpgrade"></a>

```csharp
public bool|IResolvable AutoMinorVersionUpgrade { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#auto_minor_version_upgrade DocdbClusterInstance#auto_minor_version_upgrade}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#availability_zone DocdbClusterInstance#availability_zone}.

---

##### `CaCertIdentifier`<sup>Optional</sup> <a name="CaCertIdentifier" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.caCertIdentifier"></a>

```csharp
public string CaCertIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#ca_cert_identifier DocdbClusterInstance#ca_cert_identifier}.

---

##### `CertificateRotationRestart`<sup>Optional</sup> <a name="CertificateRotationRestart" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.certificateRotationRestart"></a>

```csharp
public string CertificateRotationRestart { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#certificate_rotation_restart DocdbClusterInstance#certificate_rotation_restart}.

---

##### `CopyTagsToSnapshot`<sup>Optional</sup> <a name="CopyTagsToSnapshot" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.copyTagsToSnapshot"></a>

```csharp
public bool|IResolvable CopyTagsToSnapshot { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#copy_tags_to_snapshot DocdbClusterInstance#copy_tags_to_snapshot}.

---

##### `EnablePerformanceInsights`<sup>Optional</sup> <a name="EnablePerformanceInsights" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.enablePerformanceInsights"></a>

```csharp
public bool|IResolvable EnablePerformanceInsights { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#enable_performance_insights DocdbClusterInstance#enable_performance_insights}.

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#engine DocdbClusterInstance#engine}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#id DocdbClusterInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#identifier DocdbClusterInstance#identifier}.

---

##### `IdentifierPrefix`<sup>Optional</sup> <a name="IdentifierPrefix" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.identifierPrefix"></a>

```csharp
public string IdentifierPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#identifier_prefix DocdbClusterInstance#identifier_prefix}.

---

##### `PerformanceInsightsKmsKeyId`<sup>Optional</sup> <a name="PerformanceInsightsKmsKeyId" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.performanceInsightsKmsKeyId"></a>

```csharp
public string PerformanceInsightsKmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#performance_insights_kms_key_id DocdbClusterInstance#performance_insights_kms_key_id}.

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#preferred_maintenance_window DocdbClusterInstance#preferred_maintenance_window}.

---

##### `PromotionTier`<sup>Optional</sup> <a name="PromotionTier" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.promotionTier"></a>

```csharp
public double PromotionTier { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#promotion_tier DocdbClusterInstance#promotion_tier}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#region DocdbClusterInstance#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#tags DocdbClusterInstance#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#tags_all DocdbClusterInstance#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceConfig.property.timeouts"></a>

```csharp
public DocdbClusterInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts">DocdbClusterInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#timeouts DocdbClusterInstance#timeouts}

---

### DocdbClusterInstanceTimeouts <a name="DocdbClusterInstanceTimeouts" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DocdbClusterInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#create DocdbClusterInstance#create}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#delete DocdbClusterInstance#delete}. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#update DocdbClusterInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#create DocdbClusterInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#delete DocdbClusterInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/docdb_cluster_instance#update DocdbClusterInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DocdbClusterInstanceTimeoutsOutputReference <a name="DocdbClusterInstanceTimeoutsOutputReference" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new DocdbClusterInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts">DocdbClusterInstanceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DocdbClusterInstanceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.docdbClusterInstance.DocdbClusterInstanceTimeouts">DocdbClusterInstanceTimeouts</a>

---



