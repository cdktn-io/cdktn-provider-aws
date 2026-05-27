# `cloudwatchAlarmMuteRule` Submodule <a name="`cloudwatchAlarmMuteRule` Submodule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchAlarmMuteRule <a name="CloudwatchAlarmMuteRule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule aws_cloudwatch_alarm_mute_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchAlarmMuteRule(Construct Scope, string Id, CloudwatchAlarmMuteRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig">CloudwatchAlarmMuteRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig">CloudwatchAlarmMuteRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putMuteTargets">PutMuteTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetExpireDate">ResetExpireDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetMuteTargets">ResetMuteTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetRule">ResetRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetStartDate">ResetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMuteTargets` <a name="PutMuteTargets" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putMuteTargets"></a>

```csharp
private void PutMuteTargets(IResolvable|CloudwatchAlarmMuteRuleMuteTargets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putMuteTargets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>[]

---

##### `PutRule` <a name="PutRule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putRule"></a>

```csharp
private void PutRule(IResolvable|CloudwatchAlarmMuteRuleRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.putRule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExpireDate` <a name="ResetExpireDate" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetExpireDate"></a>

```csharp
private void ResetExpireDate()
```

##### `ResetMuteTargets` <a name="ResetMuteTargets" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetMuteTargets"></a>

```csharp
private void ResetMuteTargets()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRule` <a name="ResetRule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetRule"></a>

```csharp
private void ResetRule()
```

##### `ResetStartDate` <a name="ResetStartDate" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetStartDate"></a>

```csharp
private void ResetStartDate()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchAlarmMuteRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchAlarmMuteRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchAlarmMuteRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchAlarmMuteRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CloudwatchAlarmMuteRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudwatchAlarmMuteRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchAlarmMuteRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchAlarmMuteRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchAlarmMuteRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.lastUpdatedTimestamp">LastUpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteTargets">MuteTargets</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList">CloudwatchAlarmMuteRuleMuteTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteType">MuteType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList">CloudwatchAlarmMuteRuleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.expireDateInput">ExpireDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteTargetsInput">MuteTargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.ruleInput">RuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.startDateInput">StartDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.expireDate">ExpireDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `LastUpdatedTimestamp`<sup>Required</sup> <a name="LastUpdatedTimestamp" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.lastUpdatedTimestamp"></a>

```csharp
public string LastUpdatedTimestamp { get; }
```

- *Type:* string

---

##### `MuteTargets`<sup>Required</sup> <a name="MuteTargets" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteTargets"></a>

```csharp
public CloudwatchAlarmMuteRuleMuteTargetsList MuteTargets { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList">CloudwatchAlarmMuteRuleMuteTargetsList</a>

---

##### `MuteType`<sup>Required</sup> <a name="MuteType" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteType"></a>

```csharp
public string MuteType { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.rule"></a>

```csharp
public CloudwatchAlarmMuteRuleRuleList Rule { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList">CloudwatchAlarmMuteRuleRuleList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpireDateInput`<sup>Optional</sup> <a name="ExpireDateInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.expireDateInput"></a>

```csharp
public string ExpireDateInput { get; }
```

- *Type:* string

---

##### `MuteTargetsInput`<sup>Optional</sup> <a name="MuteTargetsInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.muteTargetsInput"></a>

```csharp
public IResolvable|CloudwatchAlarmMuteRuleMuteTargets[] MuteTargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.ruleInput"></a>

```csharp
public IResolvable|CloudwatchAlarmMuteRuleRule[] RuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>[]

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.startDateInput"></a>

```csharp
public string StartDateInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExpireDate`<sup>Required</sup> <a name="ExpireDate" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.expireDate"></a>

```csharp
public string ExpireDate { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchAlarmMuteRuleConfig <a name="CloudwatchAlarmMuteRuleConfig" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchAlarmMuteRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Description = null,
    string ExpireDate = null,
    IResolvable|CloudwatchAlarmMuteRuleMuteTargets[] MuteTargets = null,
    string Region = null,
    IResolvable|CloudwatchAlarmMuteRuleRule[] Rule = null,
    string StartDate = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#name CloudwatchAlarmMuteRule#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#description CloudwatchAlarmMuteRule#description}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.expireDate">ExpireDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#expire_date CloudwatchAlarmMuteRule#expire_date}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.muteTargets">MuteTargets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>[]</code> | mute_targets block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.rule">Rule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>[]</code> | rule block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.startDate">StartDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#start_date CloudwatchAlarmMuteRule#start_date}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#tags CloudwatchAlarmMuteRule#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#name CloudwatchAlarmMuteRule#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#description CloudwatchAlarmMuteRule#description}.

---

##### `ExpireDate`<sup>Optional</sup> <a name="ExpireDate" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.expireDate"></a>

```csharp
public string ExpireDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#expire_date CloudwatchAlarmMuteRule#expire_date}.

---

##### `MuteTargets`<sup>Optional</sup> <a name="MuteTargets" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.muteTargets"></a>

```csharp
public IResolvable|CloudwatchAlarmMuteRuleMuteTargets[] MuteTargets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>[]

mute_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#mute_targets CloudwatchAlarmMuteRule#mute_targets}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#region CloudwatchAlarmMuteRule#region}

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.rule"></a>

```csharp
public IResolvable|CloudwatchAlarmMuteRuleRule[] Rule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#rule CloudwatchAlarmMuteRule#rule}

---

##### `StartDate`<sup>Optional</sup> <a name="StartDate" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.startDate"></a>

```csharp
public string StartDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#start_date CloudwatchAlarmMuteRule#start_date}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#tags CloudwatchAlarmMuteRule#tags}.

---

### CloudwatchAlarmMuteRuleMuteTargets <a name="CloudwatchAlarmMuteRuleMuteTargets" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchAlarmMuteRuleMuteTargets {
    string[] AlarmNames
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets.property.alarmNames">AlarmNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#alarm_names CloudwatchAlarmMuteRule#alarm_names}. |

---

##### `AlarmNames`<sup>Required</sup> <a name="AlarmNames" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets.property.alarmNames"></a>

```csharp
public string[] AlarmNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#alarm_names CloudwatchAlarmMuteRule#alarm_names}.

---

### CloudwatchAlarmMuteRuleRule <a name="CloudwatchAlarmMuteRuleRule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchAlarmMuteRuleRule {
    IResolvable|CloudwatchAlarmMuteRuleRuleSchedule[] Schedule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule.property.schedule">Schedule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>[]</code> | schedule block. |

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule.property.schedule"></a>

```csharp
public IResolvable|CloudwatchAlarmMuteRuleRuleSchedule[] Schedule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>[]

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#schedule CloudwatchAlarmMuteRule#schedule}

---

### CloudwatchAlarmMuteRuleRuleSchedule <a name="CloudwatchAlarmMuteRuleRuleSchedule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchAlarmMuteRuleRuleSchedule {
    string Duration,
    string Expression,
    string Timezone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.duration">Duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#duration CloudwatchAlarmMuteRule#duration}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#expression CloudwatchAlarmMuteRule#expression}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.timezone">Timezone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#timezone CloudwatchAlarmMuteRule#timezone}. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#duration CloudwatchAlarmMuteRule#duration}.

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#expression CloudwatchAlarmMuteRule#expression}.

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/cloudwatch_alarm_mute_rule#timezone CloudwatchAlarmMuteRule#timezone}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchAlarmMuteRuleMuteTargetsList <a name="CloudwatchAlarmMuteRuleMuteTargetsList" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchAlarmMuteRuleMuteTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.get"></a>

```csharp
private CloudwatchAlarmMuteRuleMuteTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchAlarmMuteRuleMuteTargets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>[]

---


### CloudwatchAlarmMuteRuleMuteTargetsOutputReference <a name="CloudwatchAlarmMuteRuleMuteTargetsOutputReference" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchAlarmMuteRuleMuteTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNamesInput">AlarmNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNames">AlarmNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmNamesInput`<sup>Optional</sup> <a name="AlarmNamesInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNamesInput"></a>

```csharp
public string[] AlarmNamesInput { get; }
```

- *Type:* string[]

---

##### `AlarmNames`<sup>Required</sup> <a name="AlarmNames" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.alarmNames"></a>

```csharp
public string[] AlarmNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchAlarmMuteRuleMuteTargets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleMuteTargets">CloudwatchAlarmMuteRuleMuteTargets</a>

---


### CloudwatchAlarmMuteRuleRuleList <a name="CloudwatchAlarmMuteRuleRuleList" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchAlarmMuteRuleRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.get"></a>

```csharp
private CloudwatchAlarmMuteRuleRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchAlarmMuteRuleRule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>[]

---


### CloudwatchAlarmMuteRuleRuleOutputReference <a name="CloudwatchAlarmMuteRuleRuleOutputReference" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchAlarmMuteRuleRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchedule` <a name="PutSchedule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.putSchedule"></a>

```csharp
private void PutSchedule(IResolvable|CloudwatchAlarmMuteRuleRuleSchedule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.putSchedule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>[]

---

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.resetSchedule"></a>

```csharp
private void ResetSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList">CloudwatchAlarmMuteRuleRuleScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.schedule"></a>

```csharp
public CloudwatchAlarmMuteRuleRuleScheduleList Schedule { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList">CloudwatchAlarmMuteRuleRuleScheduleList</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.scheduleInput"></a>

```csharp
public IResolvable|CloudwatchAlarmMuteRuleRuleSchedule[] ScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchAlarmMuteRuleRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRule">CloudwatchAlarmMuteRuleRule</a>

---


### CloudwatchAlarmMuteRuleRuleScheduleList <a name="CloudwatchAlarmMuteRuleRuleScheduleList" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchAlarmMuteRuleRuleScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.get"></a>

```csharp
private CloudwatchAlarmMuteRuleRuleScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleList.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchAlarmMuteRuleRuleSchedule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>[]

---


### CloudwatchAlarmMuteRuleRuleScheduleOutputReference <a name="CloudwatchAlarmMuteRuleRuleScheduleOutputReference" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CloudwatchAlarmMuteRuleRuleScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.resetTimezone"></a>

```csharp
private void ResetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudwatchAlarmMuteRuleRuleSchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchAlarmMuteRule.CloudwatchAlarmMuteRuleRuleSchedule">CloudwatchAlarmMuteRuleRuleSchedule</a>

---



