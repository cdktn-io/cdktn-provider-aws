# `ssmAssociation` Submodule <a name="`ssmAssociation` Submodule" id="@cdktn/provider-aws.ssmAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmAssociation <a name="SsmAssociation" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association aws_ssm_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsmAssociation(Construct Scope, string Id, SsmAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig">SsmAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig">SsmAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.putOutputLocation">PutOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetApplyOnlyAtCronInterval">ResetApplyOnlyAtCronInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetAssociationName">ResetAssociationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetAutomationTargetParameterName">ResetAutomationTargetParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetCalendarNames">ResetCalendarNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetComplianceSeverity">ResetComplianceSeverity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetDocumentVersion">ResetDocumentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetMaxConcurrency">ResetMaxConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetMaxErrors">ResetMaxErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetOutputLocation">ResetOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetScheduleExpression">ResetScheduleExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetSyncCompliance">ResetSyncCompliance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetTargets">ResetTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetWaitForSuccessTimeoutSeconds">ResetWaitForSuccessTimeoutSeconds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOutputLocation` <a name="PutOutputLocation" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.putOutputLocation"></a>

```csharp
private void PutOutputLocation(SsmAssociationOutputLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.putOutputLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a>

---

##### `PutTargets` <a name="PutTargets" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.putTargets"></a>

```csharp
private void PutTargets(IResolvable|SsmAssociationTargets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.putTargets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>[]

---

##### `ResetApplyOnlyAtCronInterval` <a name="ResetApplyOnlyAtCronInterval" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetApplyOnlyAtCronInterval"></a>

```csharp
private void ResetApplyOnlyAtCronInterval()
```

##### `ResetAssociationName` <a name="ResetAssociationName" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetAssociationName"></a>

```csharp
private void ResetAssociationName()
```

##### `ResetAutomationTargetParameterName` <a name="ResetAutomationTargetParameterName" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetAutomationTargetParameterName"></a>

```csharp
private void ResetAutomationTargetParameterName()
```

##### `ResetCalendarNames` <a name="ResetCalendarNames" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetCalendarNames"></a>

```csharp
private void ResetCalendarNames()
```

##### `ResetComplianceSeverity` <a name="ResetComplianceSeverity" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetComplianceSeverity"></a>

```csharp
private void ResetComplianceSeverity()
```

##### `ResetDocumentVersion` <a name="ResetDocumentVersion" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetDocumentVersion"></a>

```csharp
private void ResetDocumentVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxConcurrency` <a name="ResetMaxConcurrency" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetMaxConcurrency"></a>

```csharp
private void ResetMaxConcurrency()
```

##### `ResetMaxErrors` <a name="ResetMaxErrors" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetMaxErrors"></a>

```csharp
private void ResetMaxErrors()
```

##### `ResetOutputLocation` <a name="ResetOutputLocation" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetOutputLocation"></a>

```csharp
private void ResetOutputLocation()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetScheduleExpression` <a name="ResetScheduleExpression" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetScheduleExpression"></a>

```csharp
private void ResetScheduleExpression()
```

##### `ResetSyncCompliance` <a name="ResetSyncCompliance" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetSyncCompliance"></a>

```csharp
private void ResetSyncCompliance()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTargets` <a name="ResetTargets" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetTargets"></a>

```csharp
private void ResetTargets()
```

##### `ResetWaitForSuccessTimeoutSeconds` <a name="ResetWaitForSuccessTimeoutSeconds" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.resetWaitForSuccessTimeoutSeconds"></a>

```csharp
private void ResetWaitForSuccessTimeoutSeconds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SsmAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SsmAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SsmAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SsmAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SsmAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SsmAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.associationId">AssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.outputLocation">OutputLocation</a></code> | <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference">SsmAssociationOutputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList">SsmAssociationTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.applyOnlyAtCronIntervalInput">ApplyOnlyAtCronIntervalInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.associationNameInput">AssociationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.automationTargetParameterNameInput">AutomationTargetParameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.calendarNamesInput">CalendarNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.complianceSeverityInput">ComplianceSeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.documentVersionInput">DocumentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.maxConcurrencyInput">MaxConcurrencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.maxErrorsInput">MaxErrorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.outputLocationInput">OutputLocationInput</a></code> | <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.syncComplianceInput">SyncComplianceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.targetsInput">TargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.waitForSuccessTimeoutSecondsInput">WaitForSuccessTimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.applyOnlyAtCronInterval">ApplyOnlyAtCronInterval</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.associationName">AssociationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.automationTargetParameterName">AutomationTargetParameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.calendarNames">CalendarNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.complianceSeverity">ComplianceSeverity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.documentVersion">DocumentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.maxConcurrency">MaxConcurrency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.maxErrors">MaxErrors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.syncCompliance">SyncCompliance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.waitForSuccessTimeoutSeconds">WaitForSuccessTimeoutSeconds</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.associationId"></a>

```csharp
public string AssociationId { get; }
```

- *Type:* string

---

##### `OutputLocation`<sup>Required</sup> <a name="OutputLocation" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.outputLocation"></a>

```csharp
public SsmAssociationOutputLocationOutputReference OutputLocation { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference">SsmAssociationOutputLocationOutputReference</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.targets"></a>

```csharp
public SsmAssociationTargetsList Targets { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList">SsmAssociationTargetsList</a>

---

##### `ApplyOnlyAtCronIntervalInput`<sup>Optional</sup> <a name="ApplyOnlyAtCronIntervalInput" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.applyOnlyAtCronIntervalInput"></a>

```csharp
public bool|IResolvable ApplyOnlyAtCronIntervalInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AssociationNameInput`<sup>Optional</sup> <a name="AssociationNameInput" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.associationNameInput"></a>

```csharp
public string AssociationNameInput { get; }
```

- *Type:* string

---

##### `AutomationTargetParameterNameInput`<sup>Optional</sup> <a name="AutomationTargetParameterNameInput" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.automationTargetParameterNameInput"></a>

```csharp
public string AutomationTargetParameterNameInput { get; }
```

- *Type:* string

---

##### `CalendarNamesInput`<sup>Optional</sup> <a name="CalendarNamesInput" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.calendarNamesInput"></a>

```csharp
public string[] CalendarNamesInput { get; }
```

- *Type:* string[]

---

##### `ComplianceSeverityInput`<sup>Optional</sup> <a name="ComplianceSeverityInput" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.complianceSeverityInput"></a>

```csharp
public string ComplianceSeverityInput { get; }
```

- *Type:* string

---

##### `DocumentVersionInput`<sup>Optional</sup> <a name="DocumentVersionInput" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.documentVersionInput"></a>

```csharp
public string DocumentVersionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxConcurrencyInput`<sup>Optional</sup> <a name="MaxConcurrencyInput" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.maxConcurrencyInput"></a>

```csharp
public string MaxConcurrencyInput { get; }
```

- *Type:* string

---

##### `MaxErrorsInput`<sup>Optional</sup> <a name="MaxErrorsInput" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.maxErrorsInput"></a>

```csharp
public string MaxErrorsInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OutputLocationInput`<sup>Optional</sup> <a name="OutputLocationInput" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.outputLocationInput"></a>

```csharp
public SsmAssociationOutputLocation OutputLocationInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a>

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.scheduleExpressionInput"></a>

```csharp
public string ScheduleExpressionInput { get; }
```

- *Type:* string

---

##### `SyncComplianceInput`<sup>Optional</sup> <a name="SyncComplianceInput" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.syncComplianceInput"></a>

```csharp
public string SyncComplianceInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.targetsInput"></a>

```csharp
public IResolvable|SsmAssociationTargets[] TargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>[]

---

##### `WaitForSuccessTimeoutSecondsInput`<sup>Optional</sup> <a name="WaitForSuccessTimeoutSecondsInput" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.waitForSuccessTimeoutSecondsInput"></a>

```csharp
public double WaitForSuccessTimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `ApplyOnlyAtCronInterval`<sup>Required</sup> <a name="ApplyOnlyAtCronInterval" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.applyOnlyAtCronInterval"></a>

```csharp
public bool|IResolvable ApplyOnlyAtCronInterval { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AssociationName`<sup>Required</sup> <a name="AssociationName" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.associationName"></a>

```csharp
public string AssociationName { get; }
```

- *Type:* string

---

##### `AutomationTargetParameterName`<sup>Required</sup> <a name="AutomationTargetParameterName" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.automationTargetParameterName"></a>

```csharp
public string AutomationTargetParameterName { get; }
```

- *Type:* string

---

##### `CalendarNames`<sup>Required</sup> <a name="CalendarNames" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.calendarNames"></a>

```csharp
public string[] CalendarNames { get; }
```

- *Type:* string[]

---

##### `ComplianceSeverity`<sup>Required</sup> <a name="ComplianceSeverity" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.complianceSeverity"></a>

```csharp
public string ComplianceSeverity { get; }
```

- *Type:* string

---

##### `DocumentVersion`<sup>Required</sup> <a name="DocumentVersion" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.documentVersion"></a>

```csharp
public string DocumentVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxConcurrency`<sup>Required</sup> <a name="MaxConcurrency" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.maxConcurrency"></a>

```csharp
public string MaxConcurrency { get; }
```

- *Type:* string

---

##### `MaxErrors`<sup>Required</sup> <a name="MaxErrors" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.maxErrors"></a>

```csharp
public string MaxErrors { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; }
```

- *Type:* string

---

##### `SyncCompliance`<sup>Required</sup> <a name="SyncCompliance" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.syncCompliance"></a>

```csharp
public string SyncCompliance { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WaitForSuccessTimeoutSeconds`<sup>Required</sup> <a name="WaitForSuccessTimeoutSeconds" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.waitForSuccessTimeoutSeconds"></a>

```csharp
public double WaitForSuccessTimeoutSeconds { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ssmAssociation.SsmAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmAssociationConfig <a name="SsmAssociationConfig" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsmAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    bool|IResolvable ApplyOnlyAtCronInterval = null,
    string AssociationName = null,
    string AutomationTargetParameterName = null,
    string[] CalendarNames = null,
    string ComplianceSeverity = null,
    string DocumentVersion = null,
    string Id = null,
    string MaxConcurrency = null,
    string MaxErrors = null,
    SsmAssociationOutputLocation OutputLocation = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    string Region = null,
    string ScheduleExpression = null,
    string SyncCompliance = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    IResolvable|SsmAssociationTargets[] Targets = null,
    double WaitForSuccessTimeoutSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#name SsmAssociation#name}. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.applyOnlyAtCronInterval">ApplyOnlyAtCronInterval</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#apply_only_at_cron_interval SsmAssociation#apply_only_at_cron_interval}. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.associationName">AssociationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#association_name SsmAssociation#association_name}. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.automationTargetParameterName">AutomationTargetParameterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#automation_target_parameter_name SsmAssociation#automation_target_parameter_name}. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.calendarNames">CalendarNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#calendar_names SsmAssociation#calendar_names}. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.complianceSeverity">ComplianceSeverity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#compliance_severity SsmAssociation#compliance_severity}. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.documentVersion">DocumentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#document_version SsmAssociation#document_version}. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#id SsmAssociation#id}. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.maxConcurrency">MaxConcurrency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#max_concurrency SsmAssociation#max_concurrency}. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.maxErrors">MaxErrors</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#max_errors SsmAssociation#max_errors}. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.outputLocation">OutputLocation</a></code> | <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a></code> | output_location block. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#parameters SsmAssociation#parameters}. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#schedule_expression SsmAssociation#schedule_expression}. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.syncCompliance">SyncCompliance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#sync_compliance SsmAssociation#sync_compliance}. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#tags SsmAssociation#tags}. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#tags_all SsmAssociation#tags_all}. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.targets">Targets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>[]</code> | targets block. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.waitForSuccessTimeoutSeconds">WaitForSuccessTimeoutSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#wait_for_success_timeout_seconds SsmAssociation#wait_for_success_timeout_seconds}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#name SsmAssociation#name}.

---

##### `ApplyOnlyAtCronInterval`<sup>Optional</sup> <a name="ApplyOnlyAtCronInterval" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.applyOnlyAtCronInterval"></a>

```csharp
public bool|IResolvable ApplyOnlyAtCronInterval { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#apply_only_at_cron_interval SsmAssociation#apply_only_at_cron_interval}.

---

##### `AssociationName`<sup>Optional</sup> <a name="AssociationName" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.associationName"></a>

```csharp
public string AssociationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#association_name SsmAssociation#association_name}.

---

##### `AutomationTargetParameterName`<sup>Optional</sup> <a name="AutomationTargetParameterName" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.automationTargetParameterName"></a>

```csharp
public string AutomationTargetParameterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#automation_target_parameter_name SsmAssociation#automation_target_parameter_name}.

---

##### `CalendarNames`<sup>Optional</sup> <a name="CalendarNames" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.calendarNames"></a>

```csharp
public string[] CalendarNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#calendar_names SsmAssociation#calendar_names}.

---

##### `ComplianceSeverity`<sup>Optional</sup> <a name="ComplianceSeverity" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.complianceSeverity"></a>

```csharp
public string ComplianceSeverity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#compliance_severity SsmAssociation#compliance_severity}.

---

##### `DocumentVersion`<sup>Optional</sup> <a name="DocumentVersion" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.documentVersion"></a>

```csharp
public string DocumentVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#document_version SsmAssociation#document_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#id SsmAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxConcurrency`<sup>Optional</sup> <a name="MaxConcurrency" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.maxConcurrency"></a>

```csharp
public string MaxConcurrency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#max_concurrency SsmAssociation#max_concurrency}.

---

##### `MaxErrors`<sup>Optional</sup> <a name="MaxErrors" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.maxErrors"></a>

```csharp
public string MaxErrors { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#max_errors SsmAssociation#max_errors}.

---

##### `OutputLocation`<sup>Optional</sup> <a name="OutputLocation" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.outputLocation"></a>

```csharp
public SsmAssociationOutputLocation OutputLocation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a>

output_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#output_location SsmAssociation#output_location}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#parameters SsmAssociation#parameters}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#region SsmAssociation#region}

---

##### `ScheduleExpression`<sup>Optional</sup> <a name="ScheduleExpression" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#schedule_expression SsmAssociation#schedule_expression}.

---

##### `SyncCompliance`<sup>Optional</sup> <a name="SyncCompliance" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.syncCompliance"></a>

```csharp
public string SyncCompliance { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#sync_compliance SsmAssociation#sync_compliance}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#tags SsmAssociation#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#tags_all SsmAssociation#tags_all}.

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.targets"></a>

```csharp
public IResolvable|SsmAssociationTargets[] Targets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>[]

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#targets SsmAssociation#targets}

---

##### `WaitForSuccessTimeoutSeconds`<sup>Optional</sup> <a name="WaitForSuccessTimeoutSeconds" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationConfig.property.waitForSuccessTimeoutSeconds"></a>

```csharp
public double WaitForSuccessTimeoutSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#wait_for_success_timeout_seconds SsmAssociation#wait_for_success_timeout_seconds}.

---

### SsmAssociationOutputLocation <a name="SsmAssociationOutputLocation" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsmAssociationOutputLocation {
    string S3BucketName,
    string S3KeyPrefix = null,
    string S3Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocation.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#s3_bucket_name SsmAssociation#s3_bucket_name}. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocation.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#s3_key_prefix SsmAssociation#s3_key_prefix}. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocation.property.s3Region">S3Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#s3_region SsmAssociation#s3_region}. |

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocation.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#s3_bucket_name SsmAssociation#s3_bucket_name}.

---

##### `S3KeyPrefix`<sup>Optional</sup> <a name="S3KeyPrefix" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocation.property.s3KeyPrefix"></a>

```csharp
public string S3KeyPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#s3_key_prefix SsmAssociation#s3_key_prefix}.

---

##### `S3Region`<sup>Optional</sup> <a name="S3Region" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocation.property.s3Region"></a>

```csharp
public string S3Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#s3_region SsmAssociation#s3_region}.

---

### SsmAssociationTargets <a name="SsmAssociationTargets" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsmAssociationTargets {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargets.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#key SsmAssociation#key}. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargets.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#values SsmAssociation#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargets.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#key SsmAssociation#key}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargets.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.51.0/docs/resources/ssm_association#values SsmAssociation#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmAssociationOutputLocationOutputReference <a name="SsmAssociationOutputLocationOutputReference" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsmAssociationOutputLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.resetS3KeyPrefix">ResetS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.resetS3Region">ResetS3Region</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3KeyPrefix` <a name="ResetS3KeyPrefix" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.resetS3KeyPrefix"></a>

```csharp
private void ResetS3KeyPrefix()
```

##### `ResetS3Region` <a name="ResetS3Region" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.resetS3Region"></a>

```csharp
private void ResetS3Region()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3KeyPrefixInput">S3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3RegionInput">S3RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3KeyPrefix">S3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3Region">S3Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3BucketNameInput"></a>

```csharp
public string S3BucketNameInput { get; }
```

- *Type:* string

---

##### `S3KeyPrefixInput`<sup>Optional</sup> <a name="S3KeyPrefixInput" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3KeyPrefixInput"></a>

```csharp
public string S3KeyPrefixInput { get; }
```

- *Type:* string

---

##### `S3RegionInput`<sup>Optional</sup> <a name="S3RegionInput" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3RegionInput"></a>

```csharp
public string S3RegionInput { get; }
```

- *Type:* string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; }
```

- *Type:* string

---

##### `S3KeyPrefix`<sup>Required</sup> <a name="S3KeyPrefix" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3KeyPrefix"></a>

```csharp
public string S3KeyPrefix { get; }
```

- *Type:* string

---

##### `S3Region`<sup>Required</sup> <a name="S3Region" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3Region"></a>

```csharp
public string S3Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.internalValue"></a>

```csharp
public SsmAssociationOutputLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a>

---


### SsmAssociationTargetsList <a name="SsmAssociationTargetsList" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsmAssociationTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.get"></a>

```csharp
private SsmAssociationTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsList.property.internalValue"></a>

```csharp
public IResolvable|SsmAssociationTargets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>[]

---


### SsmAssociationTargetsOutputReference <a name="SsmAssociationTargetsOutputReference" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SsmAssociationTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ssmAssociation.SsmAssociationTargetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmAssociationTargets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>

---



