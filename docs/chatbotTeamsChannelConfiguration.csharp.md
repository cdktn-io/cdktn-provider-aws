# `chatbotTeamsChannelConfiguration` Submodule <a name="`chatbotTeamsChannelConfiguration` Submodule" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChatbotTeamsChannelConfiguration <a name="ChatbotTeamsChannelConfiguration" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration aws_chatbot_teams_channel_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ChatbotTeamsChannelConfiguration(Construct Scope, string Id, ChatbotTeamsChannelConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig">ChatbotTeamsChannelConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig">ChatbotTeamsChannelConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetChannelName">ResetChannelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetGuardrailPolicyArns">ResetGuardrailPolicyArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetLoggingLevel">ResetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetSnsTopicArns">ResetSnsTopicArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTeamName">ResetTeamName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetUserAuthorizationRequired">ResetUserAuthorizationRequired</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.putTimeouts"></a>

```csharp
private void PutTimeouts(ChatbotTeamsChannelConfigurationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a>

---

##### `ResetChannelName` <a name="ResetChannelName" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetChannelName"></a>

```csharp
private void ResetChannelName()
```

##### `ResetGuardrailPolicyArns` <a name="ResetGuardrailPolicyArns" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetGuardrailPolicyArns"></a>

```csharp
private void ResetGuardrailPolicyArns()
```

##### `ResetLoggingLevel` <a name="ResetLoggingLevel" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetLoggingLevel"></a>

```csharp
private void ResetLoggingLevel()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSnsTopicArns` <a name="ResetSnsTopicArns" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetSnsTopicArns"></a>

```csharp
private void ResetSnsTopicArns()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTeamName` <a name="ResetTeamName" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTeamName"></a>

```csharp
private void ResetTeamName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserAuthorizationRequired` <a name="ResetUserAuthorizationRequired" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.resetUserAuthorizationRequired"></a>

```csharp
private void ResetUserAuthorizationRequired()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChatbotTeamsChannelConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ChatbotTeamsChannelConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ChatbotTeamsChannelConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ChatbotTeamsChannelConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ChatbotTeamsChannelConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ChatbotTeamsChannelConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChatbotTeamsChannelConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChatbotTeamsChannelConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ChatbotTeamsChannelConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.chatConfigurationArn">ChatConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference">ChatbotTeamsChannelConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelIdInput">ChannelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelNameInput">ChannelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.configurationNameInput">ConfigurationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.guardrailPolicyArnsInput">GuardrailPolicyArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.loggingLevelInput">LoggingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.snsTopicArnsInput">SnsTopicArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamIdInput">TeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamNameInput">TeamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.userAuthorizationRequiredInput">UserAuthorizationRequiredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelId">ChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelName">ChannelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.configurationName">ConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.guardrailPolicyArns">GuardrailPolicyArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.loggingLevel">LoggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.snsTopicArns">SnsTopicArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamId">TeamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamName">TeamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.userAuthorizationRequired">UserAuthorizationRequired</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ChatConfigurationArn`<sup>Required</sup> <a name="ChatConfigurationArn" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.chatConfigurationArn"></a>

```csharp
public string ChatConfigurationArn { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.timeouts"></a>

```csharp
public ChatbotTeamsChannelConfigurationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference">ChatbotTeamsChannelConfigurationTimeoutsOutputReference</a>

---

##### `ChannelIdInput`<sup>Optional</sup> <a name="ChannelIdInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelIdInput"></a>

```csharp
public string ChannelIdInput { get; }
```

- *Type:* string

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelNameInput"></a>

```csharp
public string ChannelNameInput { get; }
```

- *Type:* string

---

##### `ConfigurationNameInput`<sup>Optional</sup> <a name="ConfigurationNameInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.configurationNameInput"></a>

```csharp
public string ConfigurationNameInput { get; }
```

- *Type:* string

---

##### `GuardrailPolicyArnsInput`<sup>Optional</sup> <a name="GuardrailPolicyArnsInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.guardrailPolicyArnsInput"></a>

```csharp
public string[] GuardrailPolicyArnsInput { get; }
```

- *Type:* string[]

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.iamRoleArnInput"></a>

```csharp
public string IamRoleArnInput { get; }
```

- *Type:* string

---

##### `LoggingLevelInput`<sup>Optional</sup> <a name="LoggingLevelInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.loggingLevelInput"></a>

```csharp
public string LoggingLevelInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SnsTopicArnsInput`<sup>Optional</sup> <a name="SnsTopicArnsInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.snsTopicArnsInput"></a>

```csharp
public string[] SnsTopicArnsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamIdInput"></a>

```csharp
public string TeamIdInput { get; }
```

- *Type:* string

---

##### `TeamNameInput`<sup>Optional</sup> <a name="TeamNameInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamNameInput"></a>

```csharp
public string TeamNameInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.timeoutsInput"></a>

```csharp
public IResolvable|ChatbotTeamsChannelConfigurationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a>

---

##### `UserAuthorizationRequiredInput`<sup>Optional</sup> <a name="UserAuthorizationRequiredInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.userAuthorizationRequiredInput"></a>

```csharp
public bool|IResolvable UserAuthorizationRequiredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelId"></a>

```csharp
public string ChannelId { get; }
```

- *Type:* string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.channelName"></a>

```csharp
public string ChannelName { get; }
```

- *Type:* string

---

##### `ConfigurationName`<sup>Required</sup> <a name="ConfigurationName" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.configurationName"></a>

```csharp
public string ConfigurationName { get; }
```

- *Type:* string

---

##### `GuardrailPolicyArns`<sup>Required</sup> <a name="GuardrailPolicyArns" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.guardrailPolicyArns"></a>

```csharp
public string[] GuardrailPolicyArns { get; }
```

- *Type:* string[]

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `LoggingLevel`<sup>Required</sup> <a name="LoggingLevel" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.loggingLevel"></a>

```csharp
public string LoggingLevel { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SnsTopicArns`<sup>Required</sup> <a name="SnsTopicArns" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.snsTopicArns"></a>

```csharp
public string[] SnsTopicArns { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamId"></a>

```csharp
public string TeamId { get; }
```

- *Type:* string

---

##### `TeamName`<sup>Required</sup> <a name="TeamName" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.teamName"></a>

```csharp
public string TeamName { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `UserAuthorizationRequired`<sup>Required</sup> <a name="UserAuthorizationRequired" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.userAuthorizationRequired"></a>

```csharp
public bool|IResolvable UserAuthorizationRequired { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChatbotTeamsChannelConfigurationConfig <a name="ChatbotTeamsChannelConfigurationConfig" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ChatbotTeamsChannelConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ChannelId,
    string ConfigurationName,
    string IamRoleArn,
    string TeamId,
    string TenantId,
    string ChannelName = null,
    string[] GuardrailPolicyArns = null,
    string LoggingLevel = null,
    string Region = null,
    string[] SnsTopicArns = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string TeamName = null,
    ChatbotTeamsChannelConfigurationTimeouts Timeouts = null,
    bool|IResolvable UserAuthorizationRequired = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.channelId">ChannelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#channel_id ChatbotTeamsChannelConfiguration#channel_id}. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.configurationName">ConfigurationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#configuration_name ChatbotTeamsChannelConfiguration#configuration_name}. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#iam_role_arn ChatbotTeamsChannelConfiguration#iam_role_arn}. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.teamId">TeamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#team_id ChatbotTeamsChannelConfiguration#team_id}. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#tenant_id ChatbotTeamsChannelConfiguration#tenant_id}. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.channelName">ChannelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#channel_name ChatbotTeamsChannelConfiguration#channel_name}. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.guardrailPolicyArns">GuardrailPolicyArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#guardrail_policy_arns ChatbotTeamsChannelConfiguration#guardrail_policy_arns}. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.loggingLevel">LoggingLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#logging_level ChatbotTeamsChannelConfiguration#logging_level}. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.snsTopicArns">SnsTopicArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#sns_topic_arns ChatbotTeamsChannelConfiguration#sns_topic_arns}. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#tags ChatbotTeamsChannelConfiguration#tags}. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.teamName">TeamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#team_name ChatbotTeamsChannelConfiguration#team_name}. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.userAuthorizationRequired">UserAuthorizationRequired</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#user_authorization_required ChatbotTeamsChannelConfiguration#user_authorization_required}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.channelId"></a>

```csharp
public string ChannelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#channel_id ChatbotTeamsChannelConfiguration#channel_id}.

---

##### `ConfigurationName`<sup>Required</sup> <a name="ConfigurationName" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.configurationName"></a>

```csharp
public string ConfigurationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#configuration_name ChatbotTeamsChannelConfiguration#configuration_name}.

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#iam_role_arn ChatbotTeamsChannelConfiguration#iam_role_arn}.

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.teamId"></a>

```csharp
public string TeamId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#team_id ChatbotTeamsChannelConfiguration#team_id}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#tenant_id ChatbotTeamsChannelConfiguration#tenant_id}.

---

##### `ChannelName`<sup>Optional</sup> <a name="ChannelName" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.channelName"></a>

```csharp
public string ChannelName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#channel_name ChatbotTeamsChannelConfiguration#channel_name}.

---

##### `GuardrailPolicyArns`<sup>Optional</sup> <a name="GuardrailPolicyArns" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.guardrailPolicyArns"></a>

```csharp
public string[] GuardrailPolicyArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#guardrail_policy_arns ChatbotTeamsChannelConfiguration#guardrail_policy_arns}.

---

##### `LoggingLevel`<sup>Optional</sup> <a name="LoggingLevel" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.loggingLevel"></a>

```csharp
public string LoggingLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#logging_level ChatbotTeamsChannelConfiguration#logging_level}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#region ChatbotTeamsChannelConfiguration#region}

---

##### `SnsTopicArns`<sup>Optional</sup> <a name="SnsTopicArns" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.snsTopicArns"></a>

```csharp
public string[] SnsTopicArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#sns_topic_arns ChatbotTeamsChannelConfiguration#sns_topic_arns}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#tags ChatbotTeamsChannelConfiguration#tags}.

---

##### `TeamName`<sup>Optional</sup> <a name="TeamName" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.teamName"></a>

```csharp
public string TeamName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#team_name ChatbotTeamsChannelConfiguration#team_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.timeouts"></a>

```csharp
public ChatbotTeamsChannelConfigurationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#timeouts ChatbotTeamsChannelConfiguration#timeouts}

---

##### `UserAuthorizationRequired`<sup>Optional</sup> <a name="UserAuthorizationRequired" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationConfig.property.userAuthorizationRequired"></a>

```csharp
public bool|IResolvable UserAuthorizationRequired { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#user_authorization_required ChatbotTeamsChannelConfiguration#user_authorization_required}.

---

### ChatbotTeamsChannelConfigurationTimeouts <a name="ChatbotTeamsChannelConfigurationTimeouts" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ChatbotTeamsChannelConfigurationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#create ChatbotTeamsChannelConfiguration#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#delete ChatbotTeamsChannelConfiguration#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chatbot_teams_channel_configuration#update ChatbotTeamsChannelConfiguration#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ChatbotTeamsChannelConfigurationTimeoutsOutputReference <a name="ChatbotTeamsChannelConfigurationTimeoutsOutputReference" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ChatbotTeamsChannelConfigurationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChatbotTeamsChannelConfigurationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.chatbotTeamsChannelConfiguration.ChatbotTeamsChannelConfigurationTimeouts">ChatbotTeamsChannelConfigurationTimeouts</a>

---



