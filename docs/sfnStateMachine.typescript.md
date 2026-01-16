# `sfnStateMachine` Submodule <a name="`sfnStateMachine` Submodule" id="@cdktn/provider-aws.sfnStateMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SfnStateMachine <a name="SfnStateMachine" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine aws_sfn_state_machine}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.Initializer"></a>

```typescript
import { sfnStateMachine } from '@cdktn/provider-aws'

new sfnStateMachine.SfnStateMachine(scope: Construct, id: string, config: SfnStateMachineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig">SfnStateMachineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig">SfnStateMachineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.putLoggingConfiguration">putLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.putTracingConfiguration">putTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetLoggingConfiguration">resetLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetPublish">resetPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetTracingConfiguration">resetTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.putEncryptionConfiguration"></a>

```typescript
public putEncryptionConfiguration(value: SfnStateMachineEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration">SfnStateMachineEncryptionConfiguration</a>

---

##### `putLoggingConfiguration` <a name="putLoggingConfiguration" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.putLoggingConfiguration"></a>

```typescript
public putLoggingConfiguration(value: SfnStateMachineLoggingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.putTimeouts"></a>

```typescript
public putTimeouts(value: SfnStateMachineTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeouts">SfnStateMachineTimeouts</a>

---

##### `putTracingConfiguration` <a name="putTracingConfiguration" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.putTracingConfiguration"></a>

```typescript
public putTracingConfiguration(value: SfnStateMachineTracingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.putTracingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a>

---

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetEncryptionConfiguration"></a>

```typescript
public resetEncryptionConfiguration(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLoggingConfiguration` <a name="resetLoggingConfiguration" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetLoggingConfiguration"></a>

```typescript
public resetLoggingConfiguration(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetPublish` <a name="resetPublish" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetPublish"></a>

```typescript
public resetPublish(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTracingConfiguration` <a name="resetTracingConfiguration" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetTracingConfiguration"></a>

```typescript
public resetTracingConfiguration(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SfnStateMachine resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.isConstruct"></a>

```typescript
import { sfnStateMachine } from '@cdktn/provider-aws'

sfnStateMachine.SfnStateMachine.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.isTerraformElement"></a>

```typescript
import { sfnStateMachine } from '@cdktn/provider-aws'

sfnStateMachine.SfnStateMachine.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.isTerraformResource"></a>

```typescript
import { sfnStateMachine } from '@cdktn/provider-aws'

sfnStateMachine.SfnStateMachine.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.generateConfigForImport"></a>

```typescript
import { sfnStateMachine } from '@cdktn/provider-aws'

sfnStateMachine.SfnStateMachine.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SfnStateMachine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SfnStateMachine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SfnStateMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SfnStateMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference">SfnStateMachineEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference">SfnStateMachineLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.revisionId">revisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.stateMachineVersionArn">stateMachineVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference">SfnStateMachineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.tracingConfiguration">tracingConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference">SfnStateMachineTracingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.versionDescription">versionDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.definitionInput">definitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration">SfnStateMachineEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.loggingConfigurationInput">loggingConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.publishInput">publishInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeouts">SfnStateMachineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.tracingConfigurationInput">tracingConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.definition">definition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.publish">publish</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: SfnStateMachineEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference">SfnStateMachineEncryptionConfigurationOutputReference</a>

---

##### `loggingConfiguration`<sup>Required</sup> <a name="loggingConfiguration" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: SfnStateMachineLoggingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference">SfnStateMachineLoggingConfigurationOutputReference</a>

---

##### `revisionId`<sup>Required</sup> <a name="revisionId" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.revisionId"></a>

```typescript
public readonly revisionId: string;
```

- *Type:* string

---

##### `stateMachineVersionArn`<sup>Required</sup> <a name="stateMachineVersionArn" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.stateMachineVersionArn"></a>

```typescript
public readonly stateMachineVersionArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.timeouts"></a>

```typescript
public readonly timeouts: SfnStateMachineTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference">SfnStateMachineTimeoutsOutputReference</a>

---

##### `tracingConfiguration`<sup>Required</sup> <a name="tracingConfiguration" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.tracingConfiguration"></a>

```typescript
public readonly tracingConfiguration: SfnStateMachineTracingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference">SfnStateMachineTracingConfigurationOutputReference</a>

---

##### `versionDescription`<sup>Required</sup> <a name="versionDescription" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.versionDescription"></a>

```typescript
public readonly versionDescription: string;
```

- *Type:* string

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.definitionInput"></a>

```typescript
public readonly definitionInput: string;
```

- *Type:* string

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.encryptionConfigurationInput"></a>

```typescript
public readonly encryptionConfigurationInput: SfnStateMachineEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration">SfnStateMachineEncryptionConfiguration</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loggingConfigurationInput`<sup>Optional</sup> <a name="loggingConfigurationInput" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.loggingConfigurationInput"></a>

```typescript
public readonly loggingConfigurationInput: SfnStateMachineLoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `publishInput`<sup>Optional</sup> <a name="publishInput" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.publishInput"></a>

```typescript
public readonly publishInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SfnStateMachineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeouts">SfnStateMachineTimeouts</a>

---

##### `tracingConfigurationInput`<sup>Optional</sup> <a name="tracingConfigurationInput" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.tracingConfigurationInput"></a>

```typescript
public readonly tracingConfigurationInput: SfnStateMachineTracingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.definition"></a>

```typescript
public readonly definition: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `publish`<sup>Required</sup> <a name="publish" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.publish"></a>

```typescript
public readonly publish: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachine.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SfnStateMachineConfig <a name="SfnStateMachineConfig" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.Initializer"></a>

```typescript
import { sfnStateMachine } from '@cdktn/provider-aws'

const sfnStateMachineConfig: sfnStateMachine.SfnStateMachineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.definition">definition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#definition SfnStateMachine#definition}. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#role_arn SfnStateMachine#role_arn}. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration">SfnStateMachineEncryptionConfiguration</a></code> | encryption_configuration block. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#id SfnStateMachine#id}. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a></code> | logging_configuration block. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#name SfnStateMachine#name}. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#name_prefix SfnStateMachine#name_prefix}. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.publish">publish</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#publish SfnStateMachine#publish}. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#tags SfnStateMachine#tags}. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#tags_all SfnStateMachine#tags_all}. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeouts">SfnStateMachineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.tracingConfiguration">tracingConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a></code> | tracing_configuration block. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#type SfnStateMachine#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.definition"></a>

```typescript
public readonly definition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#definition SfnStateMachine#definition}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#role_arn SfnStateMachine#role_arn}.

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: SfnStateMachineEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration">SfnStateMachineEncryptionConfiguration</a>

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#encryption_configuration SfnStateMachine#encryption_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#id SfnStateMachine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: SfnStateMachineLoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a>

logging_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#logging_configuration SfnStateMachine#logging_configuration}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#name SfnStateMachine#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#name_prefix SfnStateMachine#name_prefix}.

---

##### `publish`<sup>Optional</sup> <a name="publish" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.publish"></a>

```typescript
public readonly publish: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#publish SfnStateMachine#publish}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#region SfnStateMachine#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#tags SfnStateMachine#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#tags_all SfnStateMachine#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SfnStateMachineTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeouts">SfnStateMachineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#timeouts SfnStateMachine#timeouts}

---

##### `tracingConfiguration`<sup>Optional</sup> <a name="tracingConfiguration" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.tracingConfiguration"></a>

```typescript
public readonly tracingConfiguration: SfnStateMachineTracingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a>

tracing_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#tracing_configuration SfnStateMachine#tracing_configuration}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#type SfnStateMachine#type}.

---

### SfnStateMachineEncryptionConfiguration <a name="SfnStateMachineEncryptionConfiguration" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration.Initializer"></a>

```typescript
import { sfnStateMachine } from '@cdktn/provider-aws'

const sfnStateMachineEncryptionConfiguration: sfnStateMachine.SfnStateMachineEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration.property.kmsDataKeyReusePeriodSeconds">kmsDataKeyReusePeriodSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#kms_data_key_reuse_period_seconds SfnStateMachine#kms_data_key_reuse_period_seconds}. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#kms_key_id SfnStateMachine#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#type SfnStateMachine#type}. |

---

##### `kmsDataKeyReusePeriodSeconds`<sup>Optional</sup> <a name="kmsDataKeyReusePeriodSeconds" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration.property.kmsDataKeyReusePeriodSeconds"></a>

```typescript
public readonly kmsDataKeyReusePeriodSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#kms_data_key_reuse_period_seconds SfnStateMachine#kms_data_key_reuse_period_seconds}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#kms_key_id SfnStateMachine#kms_key_id}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#type SfnStateMachine#type}.

---

### SfnStateMachineLoggingConfiguration <a name="SfnStateMachineLoggingConfiguration" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.Initializer"></a>

```typescript
import { sfnStateMachine } from '@cdktn/provider-aws'

const sfnStateMachineLoggingConfiguration: sfnStateMachine.SfnStateMachineLoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.property.includeExecutionData">includeExecutionData</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#include_execution_data SfnStateMachine#include_execution_data}. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.property.level">level</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#level SfnStateMachine#level}. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.property.logDestination">logDestination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#log_destination SfnStateMachine#log_destination}. |

---

##### `includeExecutionData`<sup>Optional</sup> <a name="includeExecutionData" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.property.includeExecutionData"></a>

```typescript
public readonly includeExecutionData: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#include_execution_data SfnStateMachine#include_execution_data}.

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#level SfnStateMachine#level}.

---

##### `logDestination`<sup>Optional</sup> <a name="logDestination" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration.property.logDestination"></a>

```typescript
public readonly logDestination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#log_destination SfnStateMachine#log_destination}.

---

### SfnStateMachineTimeouts <a name="SfnStateMachineTimeouts" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeouts.Initializer"></a>

```typescript
import { sfnStateMachine } from '@cdktn/provider-aws'

const sfnStateMachineTimeouts: sfnStateMachine.SfnStateMachineTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#create SfnStateMachine#create}. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#delete SfnStateMachine#delete}. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#update SfnStateMachine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#create SfnStateMachine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#delete SfnStateMachine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#update SfnStateMachine#update}.

---

### SfnStateMachineTracingConfiguration <a name="SfnStateMachineTracingConfiguration" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration.Initializer"></a>

```typescript
import { sfnStateMachine } from '@cdktn/provider-aws'

const sfnStateMachineTracingConfiguration: sfnStateMachine.SfnStateMachineTracingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#enabled SfnStateMachine#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sfn_state_machine#enabled SfnStateMachine#enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### SfnStateMachineEncryptionConfigurationOutputReference <a name="SfnStateMachineEncryptionConfigurationOutputReference" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { sfnStateMachine } from '@cdktn/provider-aws'

new sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.resetKmsDataKeyReusePeriodSeconds">resetKmsDataKeyReusePeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsDataKeyReusePeriodSeconds` <a name="resetKmsDataKeyReusePeriodSeconds" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.resetKmsDataKeyReusePeriodSeconds"></a>

```typescript
public resetKmsDataKeyReusePeriodSeconds(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.kmsDataKeyReusePeriodSecondsInput">kmsDataKeyReusePeriodSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.kmsDataKeyReusePeriodSeconds">kmsDataKeyReusePeriodSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration">SfnStateMachineEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsDataKeyReusePeriodSecondsInput`<sup>Optional</sup> <a name="kmsDataKeyReusePeriodSecondsInput" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.kmsDataKeyReusePeriodSecondsInput"></a>

```typescript
public readonly kmsDataKeyReusePeriodSecondsInput: number;
```

- *Type:* number

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `kmsDataKeyReusePeriodSeconds`<sup>Required</sup> <a name="kmsDataKeyReusePeriodSeconds" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.kmsDataKeyReusePeriodSeconds"></a>

```typescript
public readonly kmsDataKeyReusePeriodSeconds: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SfnStateMachineEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineEncryptionConfiguration">SfnStateMachineEncryptionConfiguration</a>

---


### SfnStateMachineLoggingConfigurationOutputReference <a name="SfnStateMachineLoggingConfigurationOutputReference" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.Initializer"></a>

```typescript
import { sfnStateMachine } from '@cdktn/provider-aws'

new sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resetIncludeExecutionData">resetIncludeExecutionData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resetLevel">resetLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resetLogDestination">resetLogDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeExecutionData` <a name="resetIncludeExecutionData" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resetIncludeExecutionData"></a>

```typescript
public resetIncludeExecutionData(): void
```

##### `resetLevel` <a name="resetLevel" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resetLevel"></a>

```typescript
public resetLevel(): void
```

##### `resetLogDestination` <a name="resetLogDestination" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.resetLogDestination"></a>

```typescript
public resetLogDestination(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.includeExecutionDataInput">includeExecutionDataInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.levelInput">levelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.logDestinationInput">logDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.includeExecutionData">includeExecutionData</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.logDestination">logDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeExecutionDataInput`<sup>Optional</sup> <a name="includeExecutionDataInput" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.includeExecutionDataInput"></a>

```typescript
public readonly includeExecutionDataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.levelInput"></a>

```typescript
public readonly levelInput: string;
```

- *Type:* string

---

##### `logDestinationInput`<sup>Optional</sup> <a name="logDestinationInput" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.logDestinationInput"></a>

```typescript
public readonly logDestinationInput: string;
```

- *Type:* string

---

##### `includeExecutionData`<sup>Required</sup> <a name="includeExecutionData" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.includeExecutionData"></a>

```typescript
public readonly includeExecutionData: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `logDestination`<sup>Required</sup> <a name="logDestination" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.logDestination"></a>

```typescript
public readonly logDestination: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SfnStateMachineLoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineLoggingConfiguration">SfnStateMachineLoggingConfiguration</a>

---


### SfnStateMachineTimeoutsOutputReference <a name="SfnStateMachineTimeoutsOutputReference" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.Initializer"></a>

```typescript
import { sfnStateMachine } from '@cdktn/provider-aws'

new sfnStateMachine.SfnStateMachineTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeouts">SfnStateMachineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SfnStateMachineTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTimeouts">SfnStateMachineTimeouts</a>

---


### SfnStateMachineTracingConfigurationOutputReference <a name="SfnStateMachineTracingConfigurationOutputReference" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.Initializer"></a>

```typescript
import { sfnStateMachine } from '@cdktn/provider-aws'

new sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SfnStateMachineTracingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.sfnStateMachine.SfnStateMachineTracingConfiguration">SfnStateMachineTracingConfiguration</a>

---



