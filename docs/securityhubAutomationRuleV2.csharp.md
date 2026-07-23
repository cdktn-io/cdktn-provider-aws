# `securityhubAutomationRuleV2` Submodule <a name="`securityhubAutomationRuleV2` Submodule" id="@cdktn/provider-aws.securityhubAutomationRuleV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubAutomationRuleV2 <a name="SecurityhubAutomationRuleV2" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2 aws_securityhub_automation_rule_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubAutomationRuleV2(Construct Scope, string Id, SecurityhubAutomationRuleV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config">SecurityhubAutomationRuleV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config">SecurityhubAutomationRuleV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetCriteria">ResetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetRuleStatus">ResetRuleStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putAction"></a>

```csharp
private void PutAction(IResolvable|SecurityhubAutomationRuleV2Action[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putAction.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>[]

---

##### `PutCriteria` <a name="PutCriteria" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putCriteria"></a>

```csharp
private void PutCriteria(IResolvable|SecurityhubAutomationRuleV2Criteria[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putCriteria.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>[]

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetCriteria` <a name="ResetCriteria" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetCriteria"></a>

```csharp
private void ResetCriteria()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRuleStatus` <a name="ResetRuleStatus" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetRuleStatus"></a>

```csharp
private void ResetRuleStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityhubAutomationRuleV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SecurityhubAutomationRuleV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SecurityhubAutomationRuleV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SecurityhubAutomationRuleV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

SecurityhubAutomationRuleV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecurityhubAutomationRuleV2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityhubAutomationRuleV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityhubAutomationRuleV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubAutomationRuleV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.action">Action</a></code> | <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList">SecurityhubAutomationRuleV2ActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList">SecurityhubAutomationRuleV2CriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.actionInput">ActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteriaInput">CriteriaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleNameInput">RuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrderInput">RuleOrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatusInput">RuleStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrder">RuleOrder</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatus">RuleStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.action"></a>

```csharp
public SecurityhubAutomationRuleV2ActionList Action { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList">SecurityhubAutomationRuleV2ActionList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteria"></a>

```csharp
public SecurityhubAutomationRuleV2CriteriaList Criteria { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList">SecurityhubAutomationRuleV2CriteriaList</a>

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.actionInput"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2Action[] ActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>[]

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteriaInput"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2Criteria[] CriteriaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleNameInput"></a>

```csharp
public string RuleNameInput { get; }
```

- *Type:* string

---

##### `RuleOrderInput`<sup>Optional</sup> <a name="RuleOrderInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrderInput"></a>

```csharp
public double RuleOrderInput { get; }
```

- *Type:* double

---

##### `RuleStatusInput`<sup>Optional</sup> <a name="RuleStatusInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatusInput"></a>

```csharp
public string RuleStatusInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `RuleOrder`<sup>Required</sup> <a name="RuleOrder" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrder"></a>

```csharp
public double RuleOrder { get; }
```

- *Type:* double

---

##### `RuleStatus`<sup>Required</sup> <a name="RuleStatus" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatus"></a>

```csharp
public string RuleStatus { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubAutomationRuleV2Action <a name="SecurityhubAutomationRuleV2Action" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubAutomationRuleV2Action {
    string Type,
    IResolvable|SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration[] ExternalIntegrationConfiguration = null,
    IResolvable|SecurityhubAutomationRuleV2ActionFindingFieldsUpdate[] FindingFieldsUpdate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.property.type">Type</a></code> | <code>string</code> | The action type: FINDING_FIELDS_UPDATE or EXTERNAL_INTEGRATION. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.property.externalIntegrationConfiguration">ExternalIntegrationConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>[]</code> | external_integration_configuration block. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.property.findingFieldsUpdate">FindingFieldsUpdate</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>[]</code> | finding_fields_update block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The action type: FINDING_FIELDS_UPDATE or EXTERNAL_INTEGRATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#type SecurityhubAutomationRuleV2#type}

---

##### `ExternalIntegrationConfiguration`<sup>Optional</sup> <a name="ExternalIntegrationConfiguration" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.property.externalIntegrationConfiguration"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration[] ExternalIntegrationConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>[]

external_integration_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#external_integration_configuration SecurityhubAutomationRuleV2#external_integration_configuration}

---

##### `FindingFieldsUpdate`<sup>Optional</sup> <a name="FindingFieldsUpdate" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.property.findingFieldsUpdate"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2ActionFindingFieldsUpdate[] FindingFieldsUpdate { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>[]

finding_fields_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#finding_fields_update SecurityhubAutomationRuleV2#finding_fields_update}

---

### SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration <a name="SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration {
    string ConnectorArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration.property.connectorArn">ConnectorArn</a></code> | <code>string</code> | The ARN of the connector. |

---

##### `ConnectorArn`<sup>Required</sup> <a name="ConnectorArn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration.property.connectorArn"></a>

```csharp
public string ConnectorArn { get; set; }
```

- *Type:* string

The ARN of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#connector_arn SecurityhubAutomationRuleV2#connector_arn}

---

### SecurityhubAutomationRuleV2ActionFindingFieldsUpdate <a name="SecurityhubAutomationRuleV2ActionFindingFieldsUpdate" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubAutomationRuleV2ActionFindingFieldsUpdate {
    string Comment = null,
    double SeverityId = null,
    double StatusId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.property.comment">Comment</a></code> | <code>string</code> | A comment for the finding. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.property.severityId">SeverityId</a></code> | <code>double</code> | The severity ID to assign. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.property.statusId">StatusId</a></code> | <code>double</code> | The status ID to assign. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

A comment for the finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#comment SecurityhubAutomationRuleV2#comment}

---

##### `SeverityId`<sup>Optional</sup> <a name="SeverityId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.property.severityId"></a>

```csharp
public double SeverityId { get; set; }
```

- *Type:* double

The severity ID to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#severity_id SecurityhubAutomationRuleV2#severity_id}

---

##### `StatusId`<sup>Optional</sup> <a name="StatusId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.property.statusId"></a>

```csharp
public double StatusId { get; set; }
```

- *Type:* double

The status ID to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#status_id SecurityhubAutomationRuleV2#status_id}

---

### SecurityhubAutomationRuleV2Config <a name="SecurityhubAutomationRuleV2Config" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubAutomationRuleV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Description,
    string RuleName,
    double RuleOrder,
    IResolvable|SecurityhubAutomationRuleV2Action[] Action = null,
    IResolvable|SecurityhubAutomationRuleV2Criteria[] Criteria = null,
    string Region = null,
    string RuleStatus = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.description">Description</a></code> | <code>string</code> | A description of the automation rule. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleName">RuleName</a></code> | <code>string</code> | The name of the automation rule. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleOrder">RuleOrder</a></code> | <code>double</code> | The priority of the rule (lower values = higher priority). |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.action">Action</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>[]</code> | action block. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.criteria">Criteria</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>[]</code> | criteria block. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleStatus">RuleStatus</a></code> | <code>string</code> | The status of the rule: ENABLED or DISABLED. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#tags SecurityhubAutomationRuleV2#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#description SecurityhubAutomationRuleV2#description}

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleName"></a>

```csharp
public string RuleName { get; set; }
```

- *Type:* string

The name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#rule_name SecurityhubAutomationRuleV2#rule_name}

---

##### `RuleOrder`<sup>Required</sup> <a name="RuleOrder" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleOrder"></a>

```csharp
public double RuleOrder { get; set; }
```

- *Type:* double

The priority of the rule (lower values = higher priority).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#rule_order SecurityhubAutomationRuleV2#rule_order}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.action"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2Action[] Action { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>[]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#action SecurityhubAutomationRuleV2#action}

---

##### `Criteria`<sup>Optional</sup> <a name="Criteria" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.criteria"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2Criteria[] Criteria { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>[]

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#criteria SecurityhubAutomationRuleV2#criteria}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#region SecurityhubAutomationRuleV2#region}

---

##### `RuleStatus`<sup>Optional</sup> <a name="RuleStatus" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleStatus"></a>

```csharp
public string RuleStatus { get; set; }
```

- *Type:* string

The status of the rule: ENABLED or DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#rule_status SecurityhubAutomationRuleV2#rule_status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#tags SecurityhubAutomationRuleV2#tags}.

---

### SecurityhubAutomationRuleV2Criteria <a name="SecurityhubAutomationRuleV2Criteria" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubAutomationRuleV2Criteria {
    string OcsfFindingCriteriaJson
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria.property.ocsfFindingCriteriaJson">OcsfFindingCriteriaJson</a></code> | <code>string</code> | JSON-encoded OCSF finding criteria for the rule. |

---

##### `OcsfFindingCriteriaJson`<sup>Required</sup> <a name="OcsfFindingCriteriaJson" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria.property.ocsfFindingCriteriaJson"></a>

```csharp
public string OcsfFindingCriteriaJson { get; set; }
```

- *Type:* string

JSON-encoded OCSF finding criteria for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#ocsf_finding_criteria_json SecurityhubAutomationRuleV2#ocsf_finding_criteria_json}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList <a name="SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.get"></a>

```csharp
private SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>[]

---


### SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference <a name="SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.connectorArnInput">ConnectorArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.connectorArn">ConnectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectorArnInput`<sup>Optional</sup> <a name="ConnectorArnInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.connectorArnInput"></a>

```csharp
public string ConnectorArnInput { get; }
```

- *Type:* string

---

##### `ConnectorArn`<sup>Required</sup> <a name="ConnectorArn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.connectorArn"></a>

```csharp
public string ConnectorArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>

---


### SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList <a name="SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.get"></a>

```csharp
private SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2ActionFindingFieldsUpdate[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>[]

---


### SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference <a name="SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resetSeverityId">ResetSeverityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resetStatusId">ResetStatusId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetSeverityId` <a name="ResetSeverityId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resetSeverityId"></a>

```csharp
private void ResetSeverityId()
```

##### `ResetStatusId` <a name="ResetStatusId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resetStatusId"></a>

```csharp
private void ResetStatusId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.severityIdInput">SeverityIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.statusIdInput">StatusIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.severityId">SeverityId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.statusId">StatusId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `SeverityIdInput`<sup>Optional</sup> <a name="SeverityIdInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.severityIdInput"></a>

```csharp
public double SeverityIdInput { get; }
```

- *Type:* double

---

##### `StatusIdInput`<sup>Optional</sup> <a name="StatusIdInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.statusIdInput"></a>

```csharp
public double StatusIdInput { get; }
```

- *Type:* double

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `SeverityId`<sup>Required</sup> <a name="SeverityId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.severityId"></a>

```csharp
public double SeverityId { get; }
```

- *Type:* double

---

##### `StatusId`<sup>Required</sup> <a name="StatusId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.statusId"></a>

```csharp
public double StatusId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2ActionFindingFieldsUpdate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>

---


### SecurityhubAutomationRuleV2ActionList <a name="SecurityhubAutomationRuleV2ActionList" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubAutomationRuleV2ActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.get"></a>

```csharp
private SecurityhubAutomationRuleV2ActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2Action[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>[]

---


### SecurityhubAutomationRuleV2ActionOutputReference <a name="SecurityhubAutomationRuleV2ActionOutputReference" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubAutomationRuleV2ActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.putExternalIntegrationConfiguration">PutExternalIntegrationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.putFindingFieldsUpdate">PutFindingFieldsUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resetExternalIntegrationConfiguration">ResetExternalIntegrationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resetFindingFieldsUpdate">ResetFindingFieldsUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExternalIntegrationConfiguration` <a name="PutExternalIntegrationConfiguration" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.putExternalIntegrationConfiguration"></a>

```csharp
private void PutExternalIntegrationConfiguration(IResolvable|SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.putExternalIntegrationConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>[]

---

##### `PutFindingFieldsUpdate` <a name="PutFindingFieldsUpdate" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.putFindingFieldsUpdate"></a>

```csharp
private void PutFindingFieldsUpdate(IResolvable|SecurityhubAutomationRuleV2ActionFindingFieldsUpdate[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.putFindingFieldsUpdate.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>[]

---

##### `ResetExternalIntegrationConfiguration` <a name="ResetExternalIntegrationConfiguration" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resetExternalIntegrationConfiguration"></a>

```csharp
private void ResetExternalIntegrationConfiguration()
```

##### `ResetFindingFieldsUpdate` <a name="ResetFindingFieldsUpdate" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resetFindingFieldsUpdate"></a>

```csharp
private void ResetFindingFieldsUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.externalIntegrationConfiguration">ExternalIntegrationConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList">SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.findingFieldsUpdate">FindingFieldsUpdate</a></code> | <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList">SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.externalIntegrationConfigurationInput">ExternalIntegrationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.findingFieldsUpdateInput">FindingFieldsUpdateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalIntegrationConfiguration`<sup>Required</sup> <a name="ExternalIntegrationConfiguration" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.externalIntegrationConfiguration"></a>

```csharp
public SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList ExternalIntegrationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList">SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList</a>

---

##### `FindingFieldsUpdate`<sup>Required</sup> <a name="FindingFieldsUpdate" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.findingFieldsUpdate"></a>

```csharp
public SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList FindingFieldsUpdate { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList">SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList</a>

---

##### `ExternalIntegrationConfigurationInput`<sup>Optional</sup> <a name="ExternalIntegrationConfigurationInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.externalIntegrationConfigurationInput"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration[] ExternalIntegrationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>[]

---

##### `FindingFieldsUpdateInput`<sup>Optional</sup> <a name="FindingFieldsUpdateInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.findingFieldsUpdateInput"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2ActionFindingFieldsUpdate[] FindingFieldsUpdateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2Action InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>

---


### SecurityhubAutomationRuleV2CriteriaList <a name="SecurityhubAutomationRuleV2CriteriaList" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubAutomationRuleV2CriteriaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.get"></a>

```csharp
private SecurityhubAutomationRuleV2CriteriaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2Criteria[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>[]

---


### SecurityhubAutomationRuleV2CriteriaOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOutputReference" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new SecurityhubAutomationRuleV2CriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteriaJsonInput">OcsfFindingCriteriaJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteriaJson">OcsfFindingCriteriaJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OcsfFindingCriteriaJsonInput`<sup>Optional</sup> <a name="OcsfFindingCriteriaJsonInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteriaJsonInput"></a>

```csharp
public string OcsfFindingCriteriaJsonInput { get; }
```

- *Type:* string

---

##### `OcsfFindingCriteriaJson`<sup>Required</sup> <a name="OcsfFindingCriteriaJson" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteriaJson"></a>

```csharp
public string OcsfFindingCriteriaJson { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2Criteria InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>

---



