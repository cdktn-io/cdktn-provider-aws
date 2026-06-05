# `chatbotSlackChannelConfiguration` Submodule <a name="`chatbotSlackChannelConfiguration` Submodule" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChatbotSlackChannelConfiguration <a name="ChatbotSlackChannelConfiguration" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/chatbot_slack_channel_configuration aws_chatbot_slack_channel_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ChatbotSlackChannelConfiguration(Construct Scope, string Id, ChatbotSlackChannelConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig">ChatbotSlackChannelConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig">ChatbotSlackChannelConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetGuardrailPolicyArns">ResetGuardrailPolicyArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetLoggingLevel">ResetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetSnsTopicArns">ResetSnsTopicArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetUserAuthorizationRequired">ResetUserAuthorizationRequired</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.putTimeouts"></a>

```csharp
private void PutTimeouts(ChatbotSlackChannelConfigurationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts">ChatbotSlackChannelConfigurationTimeouts</a>

---

##### `ResetGuardrailPolicyArns` <a name="ResetGuardrailPolicyArns" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetGuardrailPolicyArns"></a>

```csharp
private void ResetGuardrailPolicyArns()
```

##### `ResetLoggingLevel` <a name="ResetLoggingLevel" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetLoggingLevel"></a>

```csharp
private void ResetLoggingLevel()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSnsTopicArns` <a name="ResetSnsTopicArns" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetSnsTopicArns"></a>

```csharp
private void ResetSnsTopicArns()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserAuthorizationRequired` <a name="ResetUserAuthorizationRequired" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.resetUserAuthorizationRequired"></a>

```csharp
private void ResetUserAuthorizationRequired()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChatbotSlackChannelConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ChatbotSlackChannelConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ChatbotSlackChannelConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ChatbotSlackChannelConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ChatbotSlackChannelConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ChatbotSlackChannelConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ChatbotSlackChannelConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ChatbotSlackChannelConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/chatbot_slack_channel_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ChatbotSlackChannelConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.chatConfigurationArn">ChatConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelName">SlackChannelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackTeamName">SlackTeamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tagsAll">TagsAll</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference">ChatbotSlackChannelConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.configurationNameInput">ConfigurationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.guardrailPolicyArnsInput">GuardrailPolicyArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.loggingLevelInput">LoggingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelIdInput">SlackChannelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackTeamIdInput">SlackTeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.snsTopicArnsInput">SnsTopicArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts">ChatbotSlackChannelConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.userAuthorizationRequiredInput">UserAuthorizationRequiredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.configurationName">ConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.guardrailPolicyArns">GuardrailPolicyArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.loggingLevel">LoggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelId">SlackChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackTeamId">SlackTeamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.snsTopicArns">SnsTopicArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.userAuthorizationRequired">UserAuthorizationRequired</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ChatConfigurationArn`<sup>Required</sup> <a name="ChatConfigurationArn" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.chatConfigurationArn"></a>

```csharp
public string ChatConfigurationArn { get; }
```

- *Type:* string

---

##### `SlackChannelName`<sup>Required</sup> <a name="SlackChannelName" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelName"></a>

```csharp
public string SlackChannelName { get; }
```

- *Type:* string

---

##### `SlackTeamName`<sup>Required</sup> <a name="SlackTeamName" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackTeamName"></a>

```csharp
public string SlackTeamName { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.timeouts"></a>

```csharp
public ChatbotSlackChannelConfigurationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference">ChatbotSlackChannelConfigurationTimeoutsOutputReference</a>

---

##### `ConfigurationNameInput`<sup>Optional</sup> <a name="ConfigurationNameInput" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.configurationNameInput"></a>

```csharp
public string ConfigurationNameInput { get; }
```

- *Type:* string

---

##### `GuardrailPolicyArnsInput`<sup>Optional</sup> <a name="GuardrailPolicyArnsInput" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.guardrailPolicyArnsInput"></a>

```csharp
public string[] GuardrailPolicyArnsInput { get; }
```

- *Type:* string[]

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.iamRoleArnInput"></a>

```csharp
public string IamRoleArnInput { get; }
```

- *Type:* string

---

##### `LoggingLevelInput`<sup>Optional</sup> <a name="LoggingLevelInput" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.loggingLevelInput"></a>

```csharp
public string LoggingLevelInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SlackChannelIdInput`<sup>Optional</sup> <a name="SlackChannelIdInput" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelIdInput"></a>

```csharp
public string SlackChannelIdInput { get; }
```

- *Type:* string

---

##### `SlackTeamIdInput`<sup>Optional</sup> <a name="SlackTeamIdInput" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackTeamIdInput"></a>

```csharp
public string SlackTeamIdInput { get; }
```

- *Type:* string

---

##### `SnsTopicArnsInput`<sup>Optional</sup> <a name="SnsTopicArnsInput" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.snsTopicArnsInput"></a>

```csharp
public string[] SnsTopicArnsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.timeoutsInput"></a>

```csharp
public IResolvable|ChatbotSlackChannelConfigurationTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts">ChatbotSlackChannelConfigurationTimeouts</a>

---

##### `UserAuthorizationRequiredInput`<sup>Optional</sup> <a name="UserAuthorizationRequiredInput" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.userAuthorizationRequiredInput"></a>

```csharp
public bool|IResolvable UserAuthorizationRequiredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ConfigurationName`<sup>Required</sup> <a name="ConfigurationName" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.configurationName"></a>

```csharp
public string ConfigurationName { get; }
```

- *Type:* string

---

##### `GuardrailPolicyArns`<sup>Required</sup> <a name="GuardrailPolicyArns" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.guardrailPolicyArns"></a>

```csharp
public string[] GuardrailPolicyArns { get; }
```

- *Type:* string[]

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `LoggingLevel`<sup>Required</sup> <a name="LoggingLevel" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.loggingLevel"></a>

```csharp
public string LoggingLevel { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SlackChannelId`<sup>Required</sup> <a name="SlackChannelId" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackChannelId"></a>

```csharp
public string SlackChannelId { get; }
```

- *Type:* string

---

##### `SlackTeamId`<sup>Required</sup> <a name="SlackTeamId" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.slackTeamId"></a>

```csharp
public string SlackTeamId { get; }
```

- *Type:* string

---

##### `SnsTopicArns`<sup>Required</sup> <a name="SnsTopicArns" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.snsTopicArns"></a>

```csharp
public string[] SnsTopicArns { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UserAuthorizationRequired`<sup>Required</sup> <a name="UserAuthorizationRequired" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.userAuthorizationRequired"></a>

```csharp
public bool|IResolvable UserAuthorizationRequired { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChatbotSlackChannelConfigurationConfig <a name="ChatbotSlackChannelConfigurationConfig" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ChatbotSlackChannelConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ConfigurationName,
    string IamRoleArn,
    string SlackChannelId,
    string SlackTeamId,
    string[] GuardrailPolicyArns = null,
    string LoggingLevel = null,
    string Region = null,
    string[] SnsTopicArns = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    ChatbotSlackChannelConfigurationTimeouts Timeouts = null,
    bool|IResolvable UserAuthorizationRequired = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.configurationName">ConfigurationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/chatbot_slack_channel_configuration#configuration_name ChatbotSlackChannelConfiguration#configuration_name}. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/chatbot_slack_channel_configuration#iam_role_arn ChatbotSlackChannelConfiguration#iam_role_arn}. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.slackChannelId">SlackChannelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/chatbot_slack_channel_configuration#slack_channel_id ChatbotSlackChannelConfiguration#slack_channel_id}. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.slackTeamId">SlackTeamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/chatbot_slack_channel_configuration#slack_team_id ChatbotSlackChannelConfiguration#slack_team_id}. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.guardrailPolicyArns">GuardrailPolicyArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/chatbot_slack_channel_configuration#guardrail_policy_arns ChatbotSlackChannelConfiguration#guardrail_policy_arns}. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.loggingLevel">LoggingLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/chatbot_slack_channel_configuration#logging_level ChatbotSlackChannelConfiguration#logging_level}. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.snsTopicArns">SnsTopicArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/chatbot_slack_channel_configuration#sns_topic_arns ChatbotSlackChannelConfiguration#sns_topic_arns}. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/chatbot_slack_channel_configuration#tags ChatbotSlackChannelConfiguration#tags}. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts">ChatbotSlackChannelConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.userAuthorizationRequired">UserAuthorizationRequired</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/chatbot_slack_channel_configuration#user_authorization_required ChatbotSlackChannelConfiguration#user_authorization_required}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConfigurationName`<sup>Required</sup> <a name="ConfigurationName" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.configurationName"></a>

```csharp
public string ConfigurationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/chatbot_slack_channel_configuration#configuration_name ChatbotSlackChannelConfiguration#configuration_name}.

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/chatbot_slack_channel_configuration#iam_role_arn ChatbotSlackChannelConfiguration#iam_role_arn}.

---

##### `SlackChannelId`<sup>Required</sup> <a name="SlackChannelId" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.slackChannelId"></a>

```csharp
public string SlackChannelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/chatbot_slack_channel_configuration#slack_channel_id ChatbotSlackChannelConfiguration#slack_channel_id}.

---

##### `SlackTeamId`<sup>Required</sup> <a name="SlackTeamId" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.slackTeamId"></a>

```csharp
public string SlackTeamId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/chatbot_slack_channel_configuration#slack_team_id ChatbotSlackChannelConfiguration#slack_team_id}.

---

##### `GuardrailPolicyArns`<sup>Optional</sup> <a name="GuardrailPolicyArns" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.guardrailPolicyArns"></a>

```csharp
public string[] GuardrailPolicyArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/chatbot_slack_channel_configuration#guardrail_policy_arns ChatbotSlackChannelConfiguration#guardrail_policy_arns}.

---

##### `LoggingLevel`<sup>Optional</sup> <a name="LoggingLevel" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.loggingLevel"></a>

```csharp
public string LoggingLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/chatbot_slack_channel_configuration#logging_level ChatbotSlackChannelConfiguration#logging_level}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/chatbot_slack_channel_configuration#region ChatbotSlackChannelConfiguration#region}

---

##### `SnsTopicArns`<sup>Optional</sup> <a name="SnsTopicArns" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.snsTopicArns"></a>

```csharp
public string[] SnsTopicArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/chatbot_slack_channel_configuration#sns_topic_arns ChatbotSlackChannelConfiguration#sns_topic_arns}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/chatbot_slack_channel_configuration#tags ChatbotSlackChannelConfiguration#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.timeouts"></a>

```csharp
public ChatbotSlackChannelConfigurationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts">ChatbotSlackChannelConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/chatbot_slack_channel_configuration#timeouts ChatbotSlackChannelConfiguration#timeouts}

---

##### `UserAuthorizationRequired`<sup>Optional</sup> <a name="UserAuthorizationRequired" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationConfig.property.userAuthorizationRequired"></a>

```csharp
public bool|IResolvable UserAuthorizationRequired { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/chatbot_slack_channel_configuration#user_authorization_required ChatbotSlackChannelConfiguration#user_authorization_required}.

---

### ChatbotSlackChannelConfigurationTimeouts <a name="ChatbotSlackChannelConfigurationTimeouts" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ChatbotSlackChannelConfigurationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/chatbot_slack_channel_configuration#create ChatbotSlackChannelConfiguration#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/chatbot_slack_channel_configuration#delete ChatbotSlackChannelConfiguration#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/resources/chatbot_slack_channel_configuration#update ChatbotSlackChannelConfiguration#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ChatbotSlackChannelConfigurationTimeoutsOutputReference <a name="ChatbotSlackChannelConfigurationTimeoutsOutputReference" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ChatbotSlackChannelConfigurationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts">ChatbotSlackChannelConfigurationTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ChatbotSlackChannelConfigurationTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-aws.chatbotSlackChannelConfiguration.ChatbotSlackChannelConfigurationTimeouts">ChatbotSlackChannelConfigurationTimeouts</a>

---



