# `route53RecoverycontrolconfigSafetyRule` Submodule <a name="`route53RecoverycontrolconfigSafetyRule` Submodule" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecoverycontrolconfigSafetyRule <a name="Route53RecoverycontrolconfigSafetyRule" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule aws_route53recoverycontrolconfig_safety_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Route53RecoverycontrolconfigSafetyRule(Construct Scope, string Id, Route53RecoverycontrolconfigSafetyRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig">Route53RecoverycontrolconfigSafetyRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig">Route53RecoverycontrolconfigSafetyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.putRuleConfig">PutRuleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetAssertedControls">ResetAssertedControls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetGatingControls">ResetGatingControls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetTargetControls">ResetTargetControls</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRuleConfig` <a name="PutRuleConfig" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.putRuleConfig"></a>

```csharp
private void PutRuleConfig(Route53RecoverycontrolconfigSafetyRuleRuleConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.putRuleConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig">Route53RecoverycontrolconfigSafetyRuleRuleConfig</a>

---

##### `ResetAssertedControls` <a name="ResetAssertedControls" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetAssertedControls"></a>

```csharp
private void ResetAssertedControls()
```

##### `ResetGatingControls` <a name="ResetGatingControls" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetGatingControls"></a>

```csharp
private void ResetGatingControls()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTargetControls` <a name="ResetTargetControls" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.resetTargetControls"></a>

```csharp
private void ResetTargetControls()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53RecoverycontrolconfigSafetyRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route53RecoverycontrolconfigSafetyRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route53RecoverycontrolconfigSafetyRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route53RecoverycontrolconfigSafetyRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

Route53RecoverycontrolconfigSafetyRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Route53RecoverycontrolconfigSafetyRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53RecoverycontrolconfigSafetyRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53RecoverycontrolconfigSafetyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Route53RecoverycontrolconfigSafetyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.ruleConfig">RuleConfig</a></code> | <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference">Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.assertedControlsInput">AssertedControlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.controlPanelArnInput">ControlPanelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.gatingControlsInput">GatingControlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.ruleConfigInput">RuleConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig">Route53RecoverycontrolconfigSafetyRuleRuleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.targetControlsInput">TargetControlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.waitPeriodMsInput">WaitPeriodMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.assertedControls">AssertedControls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.controlPanelArn">ControlPanelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.gatingControls">GatingControls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.targetControls">TargetControls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.waitPeriodMs">WaitPeriodMs</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `RuleConfig`<sup>Required</sup> <a name="RuleConfig" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.ruleConfig"></a>

```csharp
public Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference RuleConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference">Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `AssertedControlsInput`<sup>Optional</sup> <a name="AssertedControlsInput" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.assertedControlsInput"></a>

```csharp
public string[] AssertedControlsInput { get; }
```

- *Type:* string[]

---

##### `ControlPanelArnInput`<sup>Optional</sup> <a name="ControlPanelArnInput" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.controlPanelArnInput"></a>

```csharp
public string ControlPanelArnInput { get; }
```

- *Type:* string

---

##### `GatingControlsInput`<sup>Optional</sup> <a name="GatingControlsInput" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.gatingControlsInput"></a>

```csharp
public string[] GatingControlsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RuleConfigInput`<sup>Optional</sup> <a name="RuleConfigInput" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.ruleConfigInput"></a>

```csharp
public Route53RecoverycontrolconfigSafetyRuleRuleConfig RuleConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig">Route53RecoverycontrolconfigSafetyRuleRuleConfig</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetControlsInput`<sup>Optional</sup> <a name="TargetControlsInput" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.targetControlsInput"></a>

```csharp
public string[] TargetControlsInput { get; }
```

- *Type:* string[]

---

##### `WaitPeriodMsInput`<sup>Optional</sup> <a name="WaitPeriodMsInput" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.waitPeriodMsInput"></a>

```csharp
public double WaitPeriodMsInput { get; }
```

- *Type:* double

---

##### `AssertedControls`<sup>Required</sup> <a name="AssertedControls" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.assertedControls"></a>

```csharp
public string[] AssertedControls { get; }
```

- *Type:* string[]

---

##### `ControlPanelArn`<sup>Required</sup> <a name="ControlPanelArn" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.controlPanelArn"></a>

```csharp
public string ControlPanelArn { get; }
```

- *Type:* string

---

##### `GatingControls`<sup>Required</sup> <a name="GatingControls" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.gatingControls"></a>

```csharp
public string[] GatingControls { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetControls`<sup>Required</sup> <a name="TargetControls" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.targetControls"></a>

```csharp
public string[] TargetControls { get; }
```

- *Type:* string[]

---

##### `WaitPeriodMs`<sup>Required</sup> <a name="WaitPeriodMs" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.waitPeriodMs"></a>

```csharp
public double WaitPeriodMs { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecoverycontrolconfigSafetyRuleConfig <a name="Route53RecoverycontrolconfigSafetyRuleConfig" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Route53RecoverycontrolconfigSafetyRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ControlPanelArn,
    string Name,
    Route53RecoverycontrolconfigSafetyRuleRuleConfig RuleConfig,
    double WaitPeriodMs,
    string[] AssertedControls = null,
    string[] GatingControls = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string[] TargetControls = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.controlPanelArn">ControlPanelArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#control_panel_arn Route53RecoverycontrolconfigSafetyRule#control_panel_arn}. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#name Route53RecoverycontrolconfigSafetyRule#name}. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.ruleConfig">RuleConfig</a></code> | <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig">Route53RecoverycontrolconfigSafetyRuleRuleConfig</a></code> | rule_config block. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.waitPeriodMs">WaitPeriodMs</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#wait_period_ms Route53RecoverycontrolconfigSafetyRule#wait_period_ms}. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.assertedControls">AssertedControls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#asserted_controls Route53RecoverycontrolconfigSafetyRule#asserted_controls}. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.gatingControls">GatingControls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#gating_controls Route53RecoverycontrolconfigSafetyRule#gating_controls}. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#id Route53RecoverycontrolconfigSafetyRule#id}. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#tags Route53RecoverycontrolconfigSafetyRule#tags}. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#tags_all Route53RecoverycontrolconfigSafetyRule#tags_all}. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.targetControls">TargetControls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#target_controls Route53RecoverycontrolconfigSafetyRule#target_controls}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ControlPanelArn`<sup>Required</sup> <a name="ControlPanelArn" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.controlPanelArn"></a>

```csharp
public string ControlPanelArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#control_panel_arn Route53RecoverycontrolconfigSafetyRule#control_panel_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#name Route53RecoverycontrolconfigSafetyRule#name}.

---

##### `RuleConfig`<sup>Required</sup> <a name="RuleConfig" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.ruleConfig"></a>

```csharp
public Route53RecoverycontrolconfigSafetyRuleRuleConfig RuleConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig">Route53RecoverycontrolconfigSafetyRuleRuleConfig</a>

rule_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#rule_config Route53RecoverycontrolconfigSafetyRule#rule_config}

---

##### `WaitPeriodMs`<sup>Required</sup> <a name="WaitPeriodMs" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.waitPeriodMs"></a>

```csharp
public double WaitPeriodMs { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#wait_period_ms Route53RecoverycontrolconfigSafetyRule#wait_period_ms}.

---

##### `AssertedControls`<sup>Optional</sup> <a name="AssertedControls" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.assertedControls"></a>

```csharp
public string[] AssertedControls { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#asserted_controls Route53RecoverycontrolconfigSafetyRule#asserted_controls}.

---

##### `GatingControls`<sup>Optional</sup> <a name="GatingControls" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.gatingControls"></a>

```csharp
public string[] GatingControls { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#gating_controls Route53RecoverycontrolconfigSafetyRule#gating_controls}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#id Route53RecoverycontrolconfigSafetyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#tags Route53RecoverycontrolconfigSafetyRule#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#tags_all Route53RecoverycontrolconfigSafetyRule#tags_all}.

---

##### `TargetControls`<sup>Optional</sup> <a name="TargetControls" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleConfig.property.targetControls"></a>

```csharp
public string[] TargetControls { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#target_controls Route53RecoverycontrolconfigSafetyRule#target_controls}.

---

### Route53RecoverycontrolconfigSafetyRuleRuleConfig <a name="Route53RecoverycontrolconfigSafetyRuleRuleConfig" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Route53RecoverycontrolconfigSafetyRuleRuleConfig {
    bool|IResolvable Inverted,
    double Threshold,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig.property.inverted">Inverted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#inverted Route53RecoverycontrolconfigSafetyRule#inverted}. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig.property.threshold">Threshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#threshold Route53RecoverycontrolconfigSafetyRule#threshold}. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#type Route53RecoverycontrolconfigSafetyRule#type}. |

---

##### `Inverted`<sup>Required</sup> <a name="Inverted" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig.property.inverted"></a>

```csharp
public bool|IResolvable Inverted { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#inverted Route53RecoverycontrolconfigSafetyRule#inverted}.

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#threshold Route53RecoverycontrolconfigSafetyRule#threshold}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/route53recoverycontrolconfig_safety_rule#type Route53RecoverycontrolconfigSafetyRule#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference <a name="Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.invertedInput">InvertedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.inverted">Inverted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig">Route53RecoverycontrolconfigSafetyRuleRuleConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InvertedInput`<sup>Optional</sup> <a name="InvertedInput" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.invertedInput"></a>

```csharp
public bool|IResolvable InvertedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Inverted`<sup>Required</sup> <a name="Inverted" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.inverted"></a>

```csharp
public bool|IResolvable Inverted { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference.property.internalValue"></a>

```csharp
public Route53RecoverycontrolconfigSafetyRuleRuleConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.route53RecoverycontrolconfigSafetyRule.Route53RecoverycontrolconfigSafetyRuleRuleConfig">Route53RecoverycontrolconfigSafetyRuleRuleConfig</a>

---



