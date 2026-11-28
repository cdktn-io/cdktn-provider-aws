# `cloudwatchomniAlert` Submodule <a name="`cloudwatchomniAlert` Submodule" id="@cdktn/provider-aws.cloudwatchomniAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchomniAlert <a name="CloudwatchomniAlert" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert aws_cloudwatchomni_alert}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

new cloudwatchomniAlert.CloudwatchomniAlert(scope: Construct, id: string, config: CloudwatchomniAlertConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig">CloudwatchomniAlertConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig">CloudwatchomniAlertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.putNotificationRule">putNotificationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetNotificationRule">resetNotificationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetNotificationsEnabled">resetNotificationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetRule">resetRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNotificationRule` <a name="putNotificationRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.putNotificationRule"></a>

```typescript
public putNotificationRule(value: IResolvable | CloudwatchomniAlertNotificationRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.putNotificationRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>[]

---

##### `putRule` <a name="putRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.putRule"></a>

```typescript
public putRule(value: IResolvable | CloudwatchomniAlertRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.putRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetNotificationRule` <a name="resetNotificationRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetNotificationRule"></a>

```typescript
public resetNotificationRule(): void
```

##### `resetNotificationsEnabled` <a name="resetNotificationsEnabled" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetNotificationsEnabled"></a>

```typescript
public resetNotificationsEnabled(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRule` <a name="resetRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetRule"></a>

```typescript
public resetRule(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchomniAlert resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isConstruct"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

cloudwatchomniAlert.CloudwatchomniAlert.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isTerraformElement"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

cloudwatchomniAlert.CloudwatchomniAlert.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isTerraformResource"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

cloudwatchomniAlert.CloudwatchomniAlert.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.generateConfigForImport"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

cloudwatchomniAlert.CloudwatchomniAlert.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudwatchomniAlert resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchomniAlert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchomniAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchomniAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.alertId">alertId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.notificationRule">notificationRule</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList">CloudwatchomniAlertNotificationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList">CloudwatchomniAlertRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.notificationRuleInput">notificationRuleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.notificationsEnabledInput">notificationsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.profileIdInput">profileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.ruleInput">ruleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.spaceIdInput">spaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.notificationsEnabled">notificationsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.spaceId">spaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `alertId`<sup>Required</sup> <a name="alertId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.alertId"></a>

```typescript
public readonly alertId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `notificationRule`<sup>Required</sup> <a name="notificationRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.notificationRule"></a>

```typescript
public readonly notificationRule: CloudwatchomniAlertNotificationRuleList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList">CloudwatchomniAlertNotificationRuleList</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.rule"></a>

```typescript
public readonly rule: CloudwatchomniAlertRuleList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList">CloudwatchomniAlertRuleList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationRuleInput`<sup>Optional</sup> <a name="notificationRuleInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.notificationRuleInput"></a>

```typescript
public readonly notificationRuleInput: IResolvable | CloudwatchomniAlertNotificationRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>[]

---

##### `notificationsEnabledInput`<sup>Optional</sup> <a name="notificationsEnabledInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.notificationsEnabledInput"></a>

```typescript
public readonly notificationsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.profileIdInput"></a>

```typescript
public readonly profileIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | CloudwatchomniAlertRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>[]

---

##### `spaceIdInput`<sup>Optional</sup> <a name="spaceIdInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.spaceIdInput"></a>

```typescript
public readonly spaceIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notificationsEnabled`<sup>Required</sup> <a name="notificationsEnabled" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.notificationsEnabled"></a>

```typescript
public readonly notificationsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlert.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchomniAlertConfig <a name="CloudwatchomniAlertConfig" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

const cloudwatchomniAlertConfig: cloudwatchomniAlert.CloudwatchomniAlertConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#name CloudwatchomniAlert#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.profileId">profileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#profile_id CloudwatchomniAlert#profile_id}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.spaceId">spaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#space_id CloudwatchomniAlert#space_id}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#description CloudwatchomniAlert#description}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.notificationRule">notificationRule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>[]</code> | notification_rule block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.notificationsEnabled">notificationsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#notifications_enabled CloudwatchomniAlert#notifications_enabled}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.rule">rule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>[]</code> | rule block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#tags CloudwatchomniAlert#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#name CloudwatchomniAlert#name}.

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#profile_id CloudwatchomniAlert#profile_id}.

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#space_id CloudwatchomniAlert#space_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#description CloudwatchomniAlert#description}.

---

##### `notificationRule`<sup>Optional</sup> <a name="notificationRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.notificationRule"></a>

```typescript
public readonly notificationRule: IResolvable | CloudwatchomniAlertNotificationRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>[]

notification_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#notification_rule CloudwatchomniAlert#notification_rule}

---

##### `notificationsEnabled`<sup>Optional</sup> <a name="notificationsEnabled" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.notificationsEnabled"></a>

```typescript
public readonly notificationsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#notifications_enabled CloudwatchomniAlert#notifications_enabled}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#region CloudwatchomniAlert#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | CloudwatchomniAlertRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#rule CloudwatchomniAlert#rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#tags CloudwatchomniAlert#tags}.

---

### CloudwatchomniAlertNotificationRule <a name="CloudwatchomniAlertNotificationRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

const cloudwatchomniAlertNotificationRule: cloudwatchomniAlert.CloudwatchomniAlertNotificationRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule.property.target">target</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a>[]</code> | target block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule.property.trigger">trigger</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a>[]</code> | trigger block. |

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule.property.target"></a>

```typescript
public readonly target: IResolvable | CloudwatchomniAlertNotificationRuleTarget[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a>[]

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#target CloudwatchomniAlert#target}

---

##### `trigger`<sup>Optional</sup> <a name="trigger" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule.property.trigger"></a>

```typescript
public readonly trigger: IResolvable | CloudwatchomniAlertNotificationRuleTrigger[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a>[]

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#trigger CloudwatchomniAlert#trigger}

---

### CloudwatchomniAlertNotificationRuleTarget <a name="CloudwatchomniAlertNotificationRuleTarget" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

const cloudwatchomniAlertNotificationRuleTarget: cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#arn CloudwatchomniAlert#arn}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#type CloudwatchomniAlert#type}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#metadata CloudwatchomniAlert#metadata}. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#arn CloudwatchomniAlert#arn}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#type CloudwatchomniAlert#type}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#metadata CloudwatchomniAlert#metadata}.

---

### CloudwatchomniAlertNotificationRuleTrigger <a name="CloudwatchomniAlertNotificationRuleTrigger" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

const cloudwatchomniAlertNotificationRuleTrigger: cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger.property.stateValues">stateValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#state_values CloudwatchomniAlert#state_values}. |

---

##### `stateValues`<sup>Optional</sup> <a name="stateValues" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger.property.stateValues"></a>

```typescript
public readonly stateValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#state_values CloudwatchomniAlert#state_values}.

---

### CloudwatchomniAlertRule <a name="CloudwatchomniAlertRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

const cloudwatchomniAlertRule: cloudwatchomniAlert.CloudwatchomniAlertRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule.property.telemetryRule">telemetryRule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a>[]</code> | telemetry_rule block. |

---

##### `telemetryRule`<sup>Optional</sup> <a name="telemetryRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule.property.telemetryRule"></a>

```typescript
public readonly telemetryRule: IResolvable | CloudwatchomniAlertRuleTelemetryRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a>[]

telemetry_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#telemetry_rule CloudwatchomniAlert#telemetry_rule}

---

### CloudwatchomniAlertRuleTelemetryRule <a name="CloudwatchomniAlertRuleTelemetryRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

const cloudwatchomniAlertRuleTelemetryRule: cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.property.condition">condition</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a>[]</code> | condition block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.property.evaluation">evaluation</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a>[]</code> | evaluation block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.property.noData">noData</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a>[]</code> | no_data block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.property.query">query</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a>[]</code> | query block. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.property.condition"></a>

```typescript
public readonly condition: IResolvable | CloudwatchomniAlertRuleTelemetryRuleCondition[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a>[]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#condition CloudwatchomniAlert#condition}

---

##### `evaluation`<sup>Optional</sup> <a name="evaluation" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.property.evaluation"></a>

```typescript
public readonly evaluation: IResolvable | CloudwatchomniAlertRuleTelemetryRuleEvaluation[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a>[]

evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#evaluation CloudwatchomniAlert#evaluation}

---

##### `noData`<sup>Optional</sup> <a name="noData" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.property.noData"></a>

```typescript
public readonly noData: IResolvable | CloudwatchomniAlertRuleTelemetryRuleNoData[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a>[]

no_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#no_data CloudwatchomniAlert#no_data}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule.property.query"></a>

```typescript
public readonly query: IResolvable | CloudwatchomniAlertRuleTelemetryRuleQuery[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a>[]

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#query CloudwatchomniAlert#query}

---

### CloudwatchomniAlertRuleTelemetryRuleCondition <a name="CloudwatchomniAlertRuleTelemetryRuleCondition" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

const cloudwatchomniAlertRuleTelemetryRuleCondition: cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.comparator">comparator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#comparator CloudwatchomniAlert#comparator}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.thresholdMode">thresholdMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#threshold_mode CloudwatchomniAlert#threshold_mode}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.criticalThreshold">criticalThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#critical_threshold CloudwatchomniAlert#critical_threshold}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.thresholdField">thresholdField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#threshold_field CloudwatchomniAlert#threshold_field}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.warningThreshold">warningThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#warning_threshold CloudwatchomniAlert#warning_threshold}. |

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#comparator CloudwatchomniAlert#comparator}.

---

##### `thresholdMode`<sup>Required</sup> <a name="thresholdMode" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.thresholdMode"></a>

```typescript
public readonly thresholdMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#threshold_mode CloudwatchomniAlert#threshold_mode}.

---

##### `criticalThreshold`<sup>Optional</sup> <a name="criticalThreshold" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.criticalThreshold"></a>

```typescript
public readonly criticalThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#critical_threshold CloudwatchomniAlert#critical_threshold}.

---

##### `thresholdField`<sup>Optional</sup> <a name="thresholdField" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.thresholdField"></a>

```typescript
public readonly thresholdField: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#threshold_field CloudwatchomniAlert#threshold_field}.

---

##### `warningThreshold`<sup>Optional</sup> <a name="warningThreshold" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition.property.warningThreshold"></a>

```typescript
public readonly warningThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#warning_threshold CloudwatchomniAlert#warning_threshold}.

---

### CloudwatchomniAlertRuleTelemetryRuleEvaluation <a name="CloudwatchomniAlertRuleTelemetryRuleEvaluation" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

const cloudwatchomniAlertRuleTelemetryRuleEvaluation: cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#interval_seconds CloudwatchomniAlert#interval_seconds}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation.property.pendingDurationSeconds">pendingDurationSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#pending_duration_seconds CloudwatchomniAlert#pending_duration_seconds}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation.property.recoveryDurationSeconds">recoveryDurationSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#recovery_duration_seconds CloudwatchomniAlert#recovery_duration_seconds}. |

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#interval_seconds CloudwatchomniAlert#interval_seconds}.

---

##### `pendingDurationSeconds`<sup>Optional</sup> <a name="pendingDurationSeconds" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation.property.pendingDurationSeconds"></a>

```typescript
public readonly pendingDurationSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#pending_duration_seconds CloudwatchomniAlert#pending_duration_seconds}.

---

##### `recoveryDurationSeconds`<sup>Optional</sup> <a name="recoveryDurationSeconds" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation.property.recoveryDurationSeconds"></a>

```typescript
public readonly recoveryDurationSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#recovery_duration_seconds CloudwatchomniAlert#recovery_duration_seconds}.

---

### CloudwatchomniAlertRuleTelemetryRuleNoData <a name="CloudwatchomniAlertRuleTelemetryRuleNoData" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

const cloudwatchomniAlertRuleTelemetryRuleNoData: cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData.property.treatAs">treatAs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#treat_as CloudwatchomniAlert#treat_as}. |

---

##### `treatAs`<sup>Required</sup> <a name="treatAs" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData.property.treatAs"></a>

```typescript
public readonly treatAs: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#treat_as CloudwatchomniAlert#treat_as}.

---

### CloudwatchomniAlertRuleTelemetryRuleQuery <a name="CloudwatchomniAlertRuleTelemetryRuleQuery" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

const cloudwatchomniAlertRuleTelemetryRuleQuery: cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#expression CloudwatchomniAlert#expression}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery.property.language">language</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#language CloudwatchomniAlert#language}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#expression CloudwatchomniAlert#expression}.

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_alert#language CloudwatchomniAlert#language}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchomniAlertNotificationRuleList <a name="CloudwatchomniAlertNotificationRuleList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

new cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.get"></a>

```typescript
public get(index: number): CloudwatchomniAlertNotificationRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAlertNotificationRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>[]

---


### CloudwatchomniAlertNotificationRuleOutputReference <a name="CloudwatchomniAlertNotificationRuleOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

new cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.putTrigger">putTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.resetTarget">resetTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.resetTrigger">resetTrigger</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTarget` <a name="putTarget" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.putTarget"></a>

```typescript
public putTarget(value: IResolvable | CloudwatchomniAlertNotificationRuleTarget[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.putTarget.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a>[]

---

##### `putTrigger` <a name="putTrigger" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.putTrigger"></a>

```typescript
public putTrigger(value: IResolvable | CloudwatchomniAlertNotificationRuleTrigger[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.putTrigger.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a>[]

---

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```

##### `resetTrigger` <a name="resetTrigger" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.resetTrigger"></a>

```typescript
public resetTrigger(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.target">target</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList">CloudwatchomniAlertNotificationRuleTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.trigger">trigger</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList">CloudwatchomniAlertNotificationRuleTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.targetInput">targetInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.triggerInput">triggerInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.target"></a>

```typescript
public readonly target: CloudwatchomniAlertNotificationRuleTargetList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList">CloudwatchomniAlertNotificationRuleTargetList</a>

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.trigger"></a>

```typescript
public readonly trigger: CloudwatchomniAlertNotificationRuleTriggerList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList">CloudwatchomniAlertNotificationRuleTriggerList</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: IResolvable | CloudwatchomniAlertNotificationRuleTarget[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a>[]

---

##### `triggerInput`<sup>Optional</sup> <a name="triggerInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.triggerInput"></a>

```typescript
public readonly triggerInput: IResolvable | CloudwatchomniAlertNotificationRuleTrigger[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAlertNotificationRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRule">CloudwatchomniAlertNotificationRule</a>

---


### CloudwatchomniAlertNotificationRuleTargetList <a name="CloudwatchomniAlertNotificationRuleTargetList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

new cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.get"></a>

```typescript
public get(index: number): CloudwatchomniAlertNotificationRuleTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAlertNotificationRuleTarget[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a>[]

---


### CloudwatchomniAlertNotificationRuleTargetOutputReference <a name="CloudwatchomniAlertNotificationRuleTargetOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

new cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.resetMetadata"></a>

```typescript
public resetMetadata(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAlertNotificationRuleTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTarget">CloudwatchomniAlertNotificationRuleTarget</a>

---


### CloudwatchomniAlertNotificationRuleTriggerList <a name="CloudwatchomniAlertNotificationRuleTriggerList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

new cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.get"></a>

```typescript
public get(index: number): CloudwatchomniAlertNotificationRuleTriggerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAlertNotificationRuleTrigger[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a>[]

---


### CloudwatchomniAlertNotificationRuleTriggerOutputReference <a name="CloudwatchomniAlertNotificationRuleTriggerOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

new cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.resetStateValues">resetStateValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStateValues` <a name="resetStateValues" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.resetStateValues"></a>

```typescript
public resetStateValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.stateValuesInput">stateValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.stateValues">stateValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stateValuesInput`<sup>Optional</sup> <a name="stateValuesInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.stateValuesInput"></a>

```typescript
public readonly stateValuesInput: string[];
```

- *Type:* string[]

---

##### `stateValues`<sup>Required</sup> <a name="stateValues" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.stateValues"></a>

```typescript
public readonly stateValues: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTriggerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAlertNotificationRuleTrigger;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertNotificationRuleTrigger">CloudwatchomniAlertNotificationRuleTrigger</a>

---


### CloudwatchomniAlertRuleList <a name="CloudwatchomniAlertRuleList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

new cloudwatchomniAlert.CloudwatchomniAlertRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.get"></a>

```typescript
public get(index: number): CloudwatchomniAlertRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAlertRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>[]

---


### CloudwatchomniAlertRuleOutputReference <a name="CloudwatchomniAlertRuleOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

new cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.putTelemetryRule">putTelemetryRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.resetTelemetryRule">resetTelemetryRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTelemetryRule` <a name="putTelemetryRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.putTelemetryRule"></a>

```typescript
public putTelemetryRule(value: IResolvable | CloudwatchomniAlertRuleTelemetryRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.putTelemetryRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a>[]

---

##### `resetTelemetryRule` <a name="resetTelemetryRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.resetTelemetryRule"></a>

```typescript
public resetTelemetryRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.telemetryRule">telemetryRule</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList">CloudwatchomniAlertRuleTelemetryRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.telemetryRuleInput">telemetryRuleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `telemetryRule`<sup>Required</sup> <a name="telemetryRule" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.telemetryRule"></a>

```typescript
public readonly telemetryRule: CloudwatchomniAlertRuleTelemetryRuleList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList">CloudwatchomniAlertRuleTelemetryRuleList</a>

---

##### `telemetryRuleInput`<sup>Optional</sup> <a name="telemetryRuleInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.telemetryRuleInput"></a>

```typescript
public readonly telemetryRuleInput: IResolvable | CloudwatchomniAlertRuleTelemetryRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAlertRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRule">CloudwatchomniAlertRule</a>

---


### CloudwatchomniAlertRuleTelemetryRuleConditionList <a name="CloudwatchomniAlertRuleTelemetryRuleConditionList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

new cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.get"></a>

```typescript
public get(index: number): CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAlertRuleTelemetryRuleCondition[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a>[]

---


### CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference <a name="CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

new cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resetCriticalThreshold">resetCriticalThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resetThresholdField">resetThresholdField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resetWarningThreshold">resetWarningThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCriticalThreshold` <a name="resetCriticalThreshold" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resetCriticalThreshold"></a>

```typescript
public resetCriticalThreshold(): void
```

##### `resetThresholdField` <a name="resetThresholdField" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resetThresholdField"></a>

```typescript
public resetThresholdField(): void
```

##### `resetWarningThreshold` <a name="resetWarningThreshold" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.resetWarningThreshold"></a>

```typescript
public resetWarningThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.comparatorInput">comparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.criticalThresholdInput">criticalThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.thresholdFieldInput">thresholdFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.thresholdModeInput">thresholdModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.warningThresholdInput">warningThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.comparator">comparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.criticalThreshold">criticalThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.thresholdField">thresholdField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.thresholdMode">thresholdMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.warningThreshold">warningThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparatorInput`<sup>Optional</sup> <a name="comparatorInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.comparatorInput"></a>

```typescript
public readonly comparatorInput: string;
```

- *Type:* string

---

##### `criticalThresholdInput`<sup>Optional</sup> <a name="criticalThresholdInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.criticalThresholdInput"></a>

```typescript
public readonly criticalThresholdInput: number;
```

- *Type:* number

---

##### `thresholdFieldInput`<sup>Optional</sup> <a name="thresholdFieldInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.thresholdFieldInput"></a>

```typescript
public readonly thresholdFieldInput: string;
```

- *Type:* string

---

##### `thresholdModeInput`<sup>Optional</sup> <a name="thresholdModeInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.thresholdModeInput"></a>

```typescript
public readonly thresholdModeInput: string;
```

- *Type:* string

---

##### `warningThresholdInput`<sup>Optional</sup> <a name="warningThresholdInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.warningThresholdInput"></a>

```typescript
public readonly warningThresholdInput: number;
```

- *Type:* number

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

---

##### `criticalThreshold`<sup>Required</sup> <a name="criticalThreshold" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.criticalThreshold"></a>

```typescript
public readonly criticalThreshold: number;
```

- *Type:* number

---

##### `thresholdField`<sup>Required</sup> <a name="thresholdField" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.thresholdField"></a>

```typescript
public readonly thresholdField: string;
```

- *Type:* string

---

##### `thresholdMode`<sup>Required</sup> <a name="thresholdMode" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.thresholdMode"></a>

```typescript
public readonly thresholdMode: string;
```

- *Type:* string

---

##### `warningThreshold`<sup>Required</sup> <a name="warningThreshold" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.warningThreshold"></a>

```typescript
public readonly warningThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAlertRuleTelemetryRuleCondition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a>

---


### CloudwatchomniAlertRuleTelemetryRuleEvaluationList <a name="CloudwatchomniAlertRuleTelemetryRuleEvaluationList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

new cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.get"></a>

```typescript
public get(index: number): CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAlertRuleTelemetryRuleEvaluation[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a>[]

---


### CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference <a name="CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

new cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.resetPendingDurationSeconds">resetPendingDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.resetRecoveryDurationSeconds">resetRecoveryDurationSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPendingDurationSeconds` <a name="resetPendingDurationSeconds" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.resetPendingDurationSeconds"></a>

```typescript
public resetPendingDurationSeconds(): void
```

##### `resetRecoveryDurationSeconds` <a name="resetRecoveryDurationSeconds" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.resetRecoveryDurationSeconds"></a>

```typescript
public resetRecoveryDurationSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSecondsInput">pendingDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSecondsInput">recoveryDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSeconds">pendingDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSeconds">recoveryDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSecondsInput"></a>

```typescript
public readonly intervalSecondsInput: number;
```

- *Type:* number

---

##### `pendingDurationSecondsInput`<sup>Optional</sup> <a name="pendingDurationSecondsInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSecondsInput"></a>

```typescript
public readonly pendingDurationSecondsInput: number;
```

- *Type:* number

---

##### `recoveryDurationSecondsInput`<sup>Optional</sup> <a name="recoveryDurationSecondsInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSecondsInput"></a>

```typescript
public readonly recoveryDurationSecondsInput: number;
```

- *Type:* number

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

---

##### `pendingDurationSeconds`<sup>Required</sup> <a name="pendingDurationSeconds" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.pendingDurationSeconds"></a>

```typescript
public readonly pendingDurationSeconds: number;
```

- *Type:* number

---

##### `recoveryDurationSeconds`<sup>Required</sup> <a name="recoveryDurationSeconds" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.recoveryDurationSeconds"></a>

```typescript
public readonly recoveryDurationSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAlertRuleTelemetryRuleEvaluation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a>

---


### CloudwatchomniAlertRuleTelemetryRuleList <a name="CloudwatchomniAlertRuleTelemetryRuleList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

new cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.get"></a>

```typescript
public get(index: number): CloudwatchomniAlertRuleTelemetryRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAlertRuleTelemetryRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a>[]

---


### CloudwatchomniAlertRuleTelemetryRuleNoDataList <a name="CloudwatchomniAlertRuleTelemetryRuleNoDataList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

new cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.get"></a>

```typescript
public get(index: number): CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAlertRuleTelemetryRuleNoData[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a>[]

---


### CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference <a name="CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

new cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.treatAsInput">treatAsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.treatAs">treatAs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `treatAsInput`<sup>Optional</sup> <a name="treatAsInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.treatAsInput"></a>

```typescript
public readonly treatAsInput: string;
```

- *Type:* string

---

##### `treatAs`<sup>Required</sup> <a name="treatAs" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.treatAs"></a>

```typescript
public readonly treatAs: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAlertRuleTelemetryRuleNoData;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a>

---


### CloudwatchomniAlertRuleTelemetryRuleOutputReference <a name="CloudwatchomniAlertRuleTelemetryRuleOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

new cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putEvaluation">putEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putNoData">putNoData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putQuery">putQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resetEvaluation">resetEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resetNoData">resetNoData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putCondition"></a>

```typescript
public putCondition(value: IResolvable | CloudwatchomniAlertRuleTelemetryRuleCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putCondition.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a>[]

---

##### `putEvaluation` <a name="putEvaluation" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putEvaluation"></a>

```typescript
public putEvaluation(value: IResolvable | CloudwatchomniAlertRuleTelemetryRuleEvaluation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putEvaluation.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a>[]

---

##### `putNoData` <a name="putNoData" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putNoData"></a>

```typescript
public putNoData(value: IResolvable | CloudwatchomniAlertRuleTelemetryRuleNoData[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putNoData.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a>[]

---

##### `putQuery` <a name="putQuery" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putQuery"></a>

```typescript
public putQuery(value: IResolvable | CloudwatchomniAlertRuleTelemetryRuleQuery[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.putQuery.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a>[]

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetEvaluation` <a name="resetEvaluation" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resetEvaluation"></a>

```typescript
public resetEvaluation(): void
```

##### `resetNoData` <a name="resetNoData" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resetNoData"></a>

```typescript
public resetNoData(): void
```

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList">CloudwatchomniAlertRuleTelemetryRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.evaluation">evaluation</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList">CloudwatchomniAlertRuleTelemetryRuleEvaluationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.noData">noData</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList">CloudwatchomniAlertRuleTelemetryRuleNoDataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.query">query</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList">CloudwatchomniAlertRuleTelemetryRuleQueryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.conditionInput">conditionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.evaluationInput">evaluationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.noDataInput">noDataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.queryInput">queryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.condition"></a>

```typescript
public readonly condition: CloudwatchomniAlertRuleTelemetryRuleConditionList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleConditionList">CloudwatchomniAlertRuleTelemetryRuleConditionList</a>

---

##### `evaluation`<sup>Required</sup> <a name="evaluation" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.evaluation"></a>

```typescript
public readonly evaluation: CloudwatchomniAlertRuleTelemetryRuleEvaluationList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluationList">CloudwatchomniAlertRuleTelemetryRuleEvaluationList</a>

---

##### `noData`<sup>Required</sup> <a name="noData" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.noData"></a>

```typescript
public readonly noData: CloudwatchomniAlertRuleTelemetryRuleNoDataList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoDataList">CloudwatchomniAlertRuleTelemetryRuleNoDataList</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.query"></a>

```typescript
public readonly query: CloudwatchomniAlertRuleTelemetryRuleQueryList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList">CloudwatchomniAlertRuleTelemetryRuleQueryList</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: IResolvable | CloudwatchomniAlertRuleTelemetryRuleCondition[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleCondition">CloudwatchomniAlertRuleTelemetryRuleCondition</a>[]

---

##### `evaluationInput`<sup>Optional</sup> <a name="evaluationInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.evaluationInput"></a>

```typescript
public readonly evaluationInput: IResolvable | CloudwatchomniAlertRuleTelemetryRuleEvaluation[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleEvaluation">CloudwatchomniAlertRuleTelemetryRuleEvaluation</a>[]

---

##### `noDataInput`<sup>Optional</sup> <a name="noDataInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.noDataInput"></a>

```typescript
public readonly noDataInput: IResolvable | CloudwatchomniAlertRuleTelemetryRuleNoData[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleNoData">CloudwatchomniAlertRuleTelemetryRuleNoData</a>[]

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: IResolvable | CloudwatchomniAlertRuleTelemetryRuleQuery[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAlertRuleTelemetryRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRule">CloudwatchomniAlertRuleTelemetryRule</a>

---


### CloudwatchomniAlertRuleTelemetryRuleQueryList <a name="CloudwatchomniAlertRuleTelemetryRuleQueryList" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

new cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.get"></a>

```typescript
public get(index: number): CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAlertRuleTelemetryRuleQuery[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a>[]

---


### CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference <a name="CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer"></a>

```typescript
import { cloudwatchomniAlert } from '@cdktn/provider-aws'

new cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.languageInput">languageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.language">language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.languageInput"></a>

```typescript
public readonly languageInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.language"></a>

```typescript
public readonly language: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAlertRuleTelemetryRuleQuery;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAlert.CloudwatchomniAlertRuleTelemetryRuleQuery">CloudwatchomniAlertRuleTelemetryRuleQuery</a>

---



