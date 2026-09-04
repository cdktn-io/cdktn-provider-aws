# `bedrockagentAgentCollaborator` Submodule <a name="`bedrockagentAgentCollaborator` Submodule" id="@cdktn/provider-aws.bedrockagentAgentCollaborator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentAgentCollaborator <a name="BedrockagentAgentCollaborator" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_agent_collaborator aws_bedrockagent_agent_collaborator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentAgentCollaborator(Construct Scope, string Id, BedrockagentAgentCollaboratorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig">BedrockagentAgentCollaboratorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig">BedrockagentAgentCollaboratorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putAgentDescriptor">PutAgentDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetAgentDescriptor">ResetAgentDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetAgentVersion">ResetAgentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetPrepareAgent">ResetPrepareAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetRelayConversationHistory">ResetRelayConversationHistory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAgentDescriptor` <a name="PutAgentDescriptor" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putAgentDescriptor"></a>

```csharp
private void PutAgentDescriptor(IResolvable|BedrockagentAgentCollaboratorAgentDescriptor[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putAgentDescriptor.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putTimeouts"></a>

```csharp
private void PutTimeouts(BedrockagentAgentCollaboratorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a>

---

##### `ResetAgentDescriptor` <a name="ResetAgentDescriptor" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetAgentDescriptor"></a>

```csharp
private void ResetAgentDescriptor()
```

##### `ResetAgentVersion` <a name="ResetAgentVersion" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetAgentVersion"></a>

```csharp
private void ResetAgentVersion()
```

##### `ResetPrepareAgent` <a name="ResetPrepareAgent" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetPrepareAgent"></a>

```csharp
private void ResetPrepareAgent()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRelayConversationHistory` <a name="ResetRelayConversationHistory" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetRelayConversationHistory"></a>

```csharp
private void ResetRelayConversationHistory()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentAgentCollaborator resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BedrockagentAgentCollaborator.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BedrockagentAgentCollaborator.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BedrockagentAgentCollaborator.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

BedrockagentAgentCollaborator.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BedrockagentAgentCollaborator resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentAgentCollaborator to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentAgentCollaborator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_agent_collaborator#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentAgentCollaborator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentDescriptor">AgentDescriptor</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList">BedrockagentAgentCollaboratorAgentDescriptorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaboratorId">CollaboratorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference">BedrockagentAgentCollaboratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentDescriptorInput">AgentDescriptorInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentIdInput">AgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentVersionInput">AgentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaborationInstructionInput">CollaborationInstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaboratorNameInput">CollaboratorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.prepareAgentInput">PrepareAgentInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.relayConversationHistoryInput">RelayConversationHistoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentId">AgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentVersion">AgentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaborationInstruction">CollaborationInstruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaboratorName">CollaboratorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.prepareAgent">PrepareAgent</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.relayConversationHistory">RelayConversationHistory</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgentDescriptor`<sup>Required</sup> <a name="AgentDescriptor" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentDescriptor"></a>

```csharp
public BedrockagentAgentCollaboratorAgentDescriptorList AgentDescriptor { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList">BedrockagentAgentCollaboratorAgentDescriptorList</a>

---

##### `CollaboratorId`<sup>Required</sup> <a name="CollaboratorId" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaboratorId"></a>

```csharp
public string CollaboratorId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.timeouts"></a>

```csharp
public BedrockagentAgentCollaboratorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference">BedrockagentAgentCollaboratorTimeoutsOutputReference</a>

---

##### `AgentDescriptorInput`<sup>Optional</sup> <a name="AgentDescriptorInput" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentDescriptorInput"></a>

```csharp
public IResolvable|BedrockagentAgentCollaboratorAgentDescriptor[] AgentDescriptorInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>[]

---

##### `AgentIdInput`<sup>Optional</sup> <a name="AgentIdInput" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentIdInput"></a>

```csharp
public string AgentIdInput { get; }
```

- *Type:* string

---

##### `AgentVersionInput`<sup>Optional</sup> <a name="AgentVersionInput" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentVersionInput"></a>

```csharp
public string AgentVersionInput { get; }
```

- *Type:* string

---

##### `CollaborationInstructionInput`<sup>Optional</sup> <a name="CollaborationInstructionInput" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaborationInstructionInput"></a>

```csharp
public string CollaborationInstructionInput { get; }
```

- *Type:* string

---

##### `CollaboratorNameInput`<sup>Optional</sup> <a name="CollaboratorNameInput" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaboratorNameInput"></a>

```csharp
public string CollaboratorNameInput { get; }
```

- *Type:* string

---

##### `PrepareAgentInput`<sup>Optional</sup> <a name="PrepareAgentInput" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.prepareAgentInput"></a>

```csharp
public bool|IResolvable PrepareAgentInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RelayConversationHistoryInput`<sup>Optional</sup> <a name="RelayConversationHistoryInput" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.relayConversationHistoryInput"></a>

```csharp
public string RelayConversationHistoryInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.timeoutsInput"></a>

```csharp
public IResolvable|BedrockagentAgentCollaboratorTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a>

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentId"></a>

```csharp
public string AgentId { get; }
```

- *Type:* string

---

##### `AgentVersion`<sup>Required</sup> <a name="AgentVersion" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.agentVersion"></a>

```csharp
public string AgentVersion { get; }
```

- *Type:* string

---

##### `CollaborationInstruction`<sup>Required</sup> <a name="CollaborationInstruction" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaborationInstruction"></a>

```csharp
public string CollaborationInstruction { get; }
```

- *Type:* string

---

##### `CollaboratorName`<sup>Required</sup> <a name="CollaboratorName" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.collaboratorName"></a>

```csharp
public string CollaboratorName { get; }
```

- *Type:* string

---

##### `PrepareAgent`<sup>Required</sup> <a name="PrepareAgent" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.prepareAgent"></a>

```csharp
public bool|IResolvable PrepareAgent { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RelayConversationHistory`<sup>Required</sup> <a name="RelayConversationHistory" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.relayConversationHistory"></a>

```csharp
public string RelayConversationHistory { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaborator.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentAgentCollaboratorAgentDescriptor <a name="BedrockagentAgentCollaboratorAgentDescriptor" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentAgentCollaboratorAgentDescriptor {
    string AliasArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor.property.aliasArn">AliasArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_agent_collaborator#alias_arn BedrockagentAgentCollaborator#alias_arn}. |

---

##### `AliasArn`<sup>Required</sup> <a name="AliasArn" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor.property.aliasArn"></a>

```csharp
public string AliasArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_agent_collaborator#alias_arn BedrockagentAgentCollaborator#alias_arn}.

---

### BedrockagentAgentCollaboratorConfig <a name="BedrockagentAgentCollaboratorConfig" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentAgentCollaboratorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AgentId,
    string CollaborationInstruction,
    string CollaboratorName,
    IResolvable|BedrockagentAgentCollaboratorAgentDescriptor[] AgentDescriptor = null,
    string AgentVersion = null,
    bool|IResolvable PrepareAgent = null,
    string Region = null,
    string RelayConversationHistory = null,
    BedrockagentAgentCollaboratorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.agentId">AgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_agent_collaborator#agent_id BedrockagentAgentCollaborator#agent_id}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.collaborationInstruction">CollaborationInstruction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_agent_collaborator#collaboration_instruction BedrockagentAgentCollaborator#collaboration_instruction}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.collaboratorName">CollaboratorName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_agent_collaborator#collaborator_name BedrockagentAgentCollaborator#collaborator_name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.agentDescriptor">AgentDescriptor</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>[]</code> | agent_descriptor block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.agentVersion">AgentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_agent_collaborator#agent_version BedrockagentAgentCollaborator#agent_version}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.prepareAgent">PrepareAgent</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_agent_collaborator#prepare_agent BedrockagentAgentCollaborator#prepare_agent}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.relayConversationHistory">RelayConversationHistory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_agent_collaborator#relay_conversation_history BedrockagentAgentCollaborator#relay_conversation_history}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.agentId"></a>

```csharp
public string AgentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_agent_collaborator#agent_id BedrockagentAgentCollaborator#agent_id}.

---

##### `CollaborationInstruction`<sup>Required</sup> <a name="CollaborationInstruction" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.collaborationInstruction"></a>

```csharp
public string CollaborationInstruction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_agent_collaborator#collaboration_instruction BedrockagentAgentCollaborator#collaboration_instruction}.

---

##### `CollaboratorName`<sup>Required</sup> <a name="CollaboratorName" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.collaboratorName"></a>

```csharp
public string CollaboratorName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_agent_collaborator#collaborator_name BedrockagentAgentCollaborator#collaborator_name}.

---

##### `AgentDescriptor`<sup>Optional</sup> <a name="AgentDescriptor" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.agentDescriptor"></a>

```csharp
public IResolvable|BedrockagentAgentCollaboratorAgentDescriptor[] AgentDescriptor { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>[]

agent_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_agent_collaborator#agent_descriptor BedrockagentAgentCollaborator#agent_descriptor}

---

##### `AgentVersion`<sup>Optional</sup> <a name="AgentVersion" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.agentVersion"></a>

```csharp
public string AgentVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_agent_collaborator#agent_version BedrockagentAgentCollaborator#agent_version}.

---

##### `PrepareAgent`<sup>Optional</sup> <a name="PrepareAgent" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.prepareAgent"></a>

```csharp
public bool|IResolvable PrepareAgent { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_agent_collaborator#prepare_agent BedrockagentAgentCollaborator#prepare_agent}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_agent_collaborator#region BedrockagentAgentCollaborator#region}

---

##### `RelayConversationHistory`<sup>Optional</sup> <a name="RelayConversationHistory" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.relayConversationHistory"></a>

```csharp
public string RelayConversationHistory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_agent_collaborator#relay_conversation_history BedrockagentAgentCollaborator#relay_conversation_history}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorConfig.property.timeouts"></a>

```csharp
public BedrockagentAgentCollaboratorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_agent_collaborator#timeouts BedrockagentAgentCollaborator#timeouts}

---

### BedrockagentAgentCollaboratorTimeouts <a name="BedrockagentAgentCollaboratorTimeouts" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentAgentCollaboratorTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_agent_collaborator#create BedrockagentAgentCollaborator#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_agent_collaborator#delete BedrockagentAgentCollaborator#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/bedrockagent_agent_collaborator#update BedrockagentAgentCollaborator#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentAgentCollaboratorAgentDescriptorList <a name="BedrockagentAgentCollaboratorAgentDescriptorList" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentAgentCollaboratorAgentDescriptorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.get"></a>

```csharp
private BedrockagentAgentCollaboratorAgentDescriptorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentAgentCollaboratorAgentDescriptor[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>[]

---


### BedrockagentAgentCollaboratorAgentDescriptorOutputReference <a name="BedrockagentAgentCollaboratorAgentDescriptorOutputReference" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentAgentCollaboratorAgentDescriptorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.aliasArnInput">AliasArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.aliasArn">AliasArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AliasArnInput`<sup>Optional</sup> <a name="AliasArnInput" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.aliasArnInput"></a>

```csharp
public string AliasArnInput { get; }
```

- *Type:* string

---

##### `AliasArn`<sup>Required</sup> <a name="AliasArn" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.aliasArn"></a>

```csharp
public string AliasArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptorOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentAgentCollaboratorAgentDescriptor InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorAgentDescriptor">BedrockagentAgentCollaboratorAgentDescriptor</a>

---


### BedrockagentAgentCollaboratorTimeoutsOutputReference <a name="BedrockagentAgentCollaboratorTimeoutsOutputReference" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new BedrockagentAgentCollaboratorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentAgentCollaboratorTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockagentAgentCollaborator.BedrockagentAgentCollaboratorTimeouts">BedrockagentAgentCollaboratorTimeouts</a>

---



