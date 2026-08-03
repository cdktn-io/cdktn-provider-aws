# `cognitoUser` Submodule <a name="`cognitoUser` Submodule" id="@cdktn/provider-aws.cognitoUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUser <a name="CognitoUser" id="@cdktn/provider-aws.cognitoUser.CognitoUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user aws_cognito_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cognitoUser.CognitoUser.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CognitoUser(Construct Scope, string Id, CognitoUserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUserConfig">CognitoUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.cognitoUser.CognitoUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cognitoUser.CognitoUserConfig">CognitoUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.resetClientMetadata">ResetClientMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.resetDesiredDeliveryMediums">ResetDesiredDeliveryMediums</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.resetForceAliasCreation">ResetForceAliasCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.resetMessageAction">ResetMessageAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.resetTemporaryPassword">ResetTemporaryPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.resetValidationData">ResetValidationData</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.cognitoUser.CognitoUser.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.cognitoUser.CognitoUser.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.cognitoUser.CognitoUser.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.cognitoUser.CognitoUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.cognitoUser.CognitoUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.cognitoUser.CognitoUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.cognitoUser.CognitoUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.cognitoUser.CognitoUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.cognitoUser.CognitoUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.cognitoUser.CognitoUser.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.cognitoUser.CognitoUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.cognitoUser.CognitoUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.cognitoUser.CognitoUser.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cognitoUser.CognitoUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.cognitoUser.CognitoUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cognitoUser.CognitoUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.cognitoUser.CognitoUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cognitoUser.CognitoUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.cognitoUser.CognitoUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cognitoUser.CognitoUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.cognitoUser.CognitoUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cognitoUser.CognitoUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.cognitoUser.CognitoUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cognitoUser.CognitoUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.cognitoUser.CognitoUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cognitoUser.CognitoUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.cognitoUser.CognitoUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cognitoUser.CognitoUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.cognitoUser.CognitoUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cognitoUser.CognitoUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.cognitoUser.CognitoUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cognitoUser.CognitoUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.cognitoUser.CognitoUser.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.cognitoUser.CognitoUser.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cognitoUser.CognitoUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cognitoUser.CognitoUser.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.cognitoUser.CognitoUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.cognitoUser.CognitoUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.cognitoUser.CognitoUser.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cognitoUser.CognitoUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.cognitoUser.CognitoUser.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.cognitoUser.CognitoUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.cognitoUser.CognitoUser.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.cognitoUser.CognitoUser.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cognitoUser.CognitoUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-aws.cognitoUser.CognitoUser.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetClientMetadata` <a name="ResetClientMetadata" id="@cdktn/provider-aws.cognitoUser.CognitoUser.resetClientMetadata"></a>

```csharp
private void ResetClientMetadata()
```

##### `ResetDesiredDeliveryMediums` <a name="ResetDesiredDeliveryMediums" id="@cdktn/provider-aws.cognitoUser.CognitoUser.resetDesiredDeliveryMediums"></a>

```csharp
private void ResetDesiredDeliveryMediums()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-aws.cognitoUser.CognitoUser.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetForceAliasCreation` <a name="ResetForceAliasCreation" id="@cdktn/provider-aws.cognitoUser.CognitoUser.resetForceAliasCreation"></a>

```csharp
private void ResetForceAliasCreation()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.cognitoUser.CognitoUser.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMessageAction` <a name="ResetMessageAction" id="@cdktn/provider-aws.cognitoUser.CognitoUser.resetMessageAction"></a>

```csharp
private void ResetMessageAction()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-aws.cognitoUser.CognitoUser.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.cognitoUser.CognitoUser.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTemporaryPassword` <a name="ResetTemporaryPassword" id="@cdktn/provider-aws.cognitoUser.CognitoUser.resetTemporaryPassword"></a>

```csharp
private void ResetTemporaryPassword()
```

##### `ResetValidationData` <a name="ResetValidationData" id="@cdktn/provider-aws.cognitoUser.CognitoUser.resetValidationData"></a>

```csharp
private void ResetValidationData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoUser resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.cognitoUser.CognitoUser.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CognitoUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cognitoUser.CognitoUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.cognitoUser.CognitoUser.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CognitoUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cognitoUser.CognitoUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.cognitoUser.CognitoUser.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CognitoUser.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.cognitoUser.CognitoUser.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.cognitoUser.CognitoUser.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

CognitoUser.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CognitoUser resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.cognitoUser.CognitoUser.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.cognitoUser.CognitoUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoUser to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.cognitoUser.CognitoUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cognitoUser.CognitoUser.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CognitoUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.lastModifiedDate">LastModifiedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.mfaSettingList">MfaSettingList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.preferredMfaSetting">PreferredMfaSetting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.sub">Sub</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.attributesInput">AttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.clientMetadataInput">ClientMetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.desiredDeliveryMediumsInput">DesiredDeliveryMediumsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.forceAliasCreationInput">ForceAliasCreationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.messageActionInput">MessageActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.temporaryPasswordInput">TemporaryPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.validationDataInput">ValidationDataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.clientMetadata">ClientMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.desiredDeliveryMediums">DesiredDeliveryMediums</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.forceAliasCreation">ForceAliasCreation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.messageAction">MessageAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.temporaryPassword">TemporaryPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.userPoolId">UserPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.validationData">ValidationData</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `LastModifiedDate`<sup>Required</sup> <a name="LastModifiedDate" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.lastModifiedDate"></a>

```csharp
public string LastModifiedDate { get; }
```

- *Type:* string

---

##### `MfaSettingList`<sup>Required</sup> <a name="MfaSettingList" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.mfaSettingList"></a>

```csharp
public string[] MfaSettingList { get; }
```

- *Type:* string[]

---

##### `PreferredMfaSetting`<sup>Required</sup> <a name="PreferredMfaSetting" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.preferredMfaSetting"></a>

```csharp
public string PreferredMfaSetting { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Sub`<sup>Required</sup> <a name="Sub" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.sub"></a>

```csharp
public string Sub { get; }
```

- *Type:* string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.attributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ClientMetadataInput`<sup>Optional</sup> <a name="ClientMetadataInput" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.clientMetadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ClientMetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DesiredDeliveryMediumsInput`<sup>Optional</sup> <a name="DesiredDeliveryMediumsInput" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.desiredDeliveryMediumsInput"></a>

```csharp
public string[] DesiredDeliveryMediumsInput { get; }
```

- *Type:* string[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForceAliasCreationInput`<sup>Optional</sup> <a name="ForceAliasCreationInput" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.forceAliasCreationInput"></a>

```csharp
public bool|IResolvable ForceAliasCreationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MessageActionInput`<sup>Optional</sup> <a name="MessageActionInput" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.messageActionInput"></a>

```csharp
public string MessageActionInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TemporaryPasswordInput`<sup>Optional</sup> <a name="TemporaryPasswordInput" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.temporaryPasswordInput"></a>

```csharp
public string TemporaryPasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.userPoolIdInput"></a>

```csharp
public string UserPoolIdInput { get; }
```

- *Type:* string

---

##### `ValidationDataInput`<sup>Optional</sup> <a name="ValidationDataInput" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.validationDataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValidationDataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ClientMetadata`<sup>Required</sup> <a name="ClientMetadata" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.clientMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ClientMetadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DesiredDeliveryMediums`<sup>Required</sup> <a name="DesiredDeliveryMediums" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.desiredDeliveryMediums"></a>

```csharp
public string[] DesiredDeliveryMediums { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForceAliasCreation`<sup>Required</sup> <a name="ForceAliasCreation" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.forceAliasCreation"></a>

```csharp
public bool|IResolvable ForceAliasCreation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MessageAction`<sup>Required</sup> <a name="MessageAction" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.messageAction"></a>

```csharp
public string MessageAction { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TemporaryPassword`<sup>Required</sup> <a name="TemporaryPassword" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.temporaryPassword"></a>

```csharp
public string TemporaryPassword { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.userPoolId"></a>

```csharp
public string UserPoolId { get; }
```

- *Type:* string

---

##### `ValidationData`<sup>Required</sup> <a name="ValidationData" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.validationData"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValidationData { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.cognitoUser.CognitoUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserConfig <a name="CognitoUserConfig" id="@cdktn/provider-aws.cognitoUser.CognitoUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cognitoUser.CognitoUserConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new CognitoUserConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Username,
    string UserPoolId,
    System.Collections.Generic.IDictionary<string, string> Attributes = null,
    System.Collections.Generic.IDictionary<string, string> ClientMetadata = null,
    string[] DesiredDeliveryMediums = null,
    bool|IResolvable Enabled = null,
    bool|IResolvable ForceAliasCreation = null,
    string Id = null,
    string MessageAction = null,
    string Password = null,
    string Region = null,
    string TemporaryPassword = null,
    System.Collections.Generic.IDictionary<string, string> ValidationData = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#username CognitoUser#username}. |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.userPoolId">UserPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#user_pool_id CognitoUser#user_pool_id}. |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.attributes">Attributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#attributes CognitoUser#attributes}. |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.clientMetadata">ClientMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#client_metadata CognitoUser#client_metadata}. |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.desiredDeliveryMediums">DesiredDeliveryMediums</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#desired_delivery_mediums CognitoUser#desired_delivery_mediums}. |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#enabled CognitoUser#enabled}. |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.forceAliasCreation">ForceAliasCreation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#force_alias_creation CognitoUser#force_alias_creation}. |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#id CognitoUser#id}. |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.messageAction">MessageAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#message_action CognitoUser#message_action}. |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#password CognitoUser#password}. |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.temporaryPassword">TemporaryPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#temporary_password CognitoUser#temporary_password}. |
| <code><a href="#@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.validationData">ValidationData</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#validation_data CognitoUser#validation_data}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#username CognitoUser#username}.

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.userPoolId"></a>

```csharp
public string UserPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#user_pool_id CognitoUser#user_pool_id}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.attributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Attributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#attributes CognitoUser#attributes}.

---

##### `ClientMetadata`<sup>Optional</sup> <a name="ClientMetadata" id="@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.clientMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ClientMetadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#client_metadata CognitoUser#client_metadata}.

---

##### `DesiredDeliveryMediums`<sup>Optional</sup> <a name="DesiredDeliveryMediums" id="@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.desiredDeliveryMediums"></a>

```csharp
public string[] DesiredDeliveryMediums { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#desired_delivery_mediums CognitoUser#desired_delivery_mediums}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#enabled CognitoUser#enabled}.

---

##### `ForceAliasCreation`<sup>Optional</sup> <a name="ForceAliasCreation" id="@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.forceAliasCreation"></a>

```csharp
public bool|IResolvable ForceAliasCreation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#force_alias_creation CognitoUser#force_alias_creation}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#id CognitoUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MessageAction`<sup>Optional</sup> <a name="MessageAction" id="@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.messageAction"></a>

```csharp
public string MessageAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#message_action CognitoUser#message_action}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#password CognitoUser#password}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#region CognitoUser#region}

---

##### `TemporaryPassword`<sup>Optional</sup> <a name="TemporaryPassword" id="@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.temporaryPassword"></a>

```csharp
public string TemporaryPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#temporary_password CognitoUser#temporary_password}.

---

##### `ValidationData`<sup>Optional</sup> <a name="ValidationData" id="@cdktn/provider-aws.cognitoUser.CognitoUserConfig.property.validationData"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ValidationData { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/cognito_user#validation_data CognitoUser#validation_data}.

---



