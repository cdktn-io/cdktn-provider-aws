# `lambdamicrovmsMicrovm` Submodule <a name="`lambdamicrovmsMicrovm` Submodule" id="@cdktn/provider-aws.lambdamicrovmsMicrovm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdamicrovmsMicrovm <a name="LambdamicrovmsMicrovm" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm aws_lambdamicrovms_microvm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_microvm.LambdamicrovmsMicrovm;

LambdamicrovmsMicrovm.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .imageArn(java.lang.String)
//  .egressNetworkConnectors(java.util.List<java.lang.String>)
//  .executionRoleArn(java.lang.String)
//  .idlePolicy(IResolvable|java.util.List<LambdamicrovmsMicrovmIdlePolicy>)
//  .imageVersion(java.lang.String)
//  .ingressNetworkConnectors(java.util.List<java.lang.String>)
//  .logging(IResolvable|java.util.List<LambdamicrovmsMicrovmLogging>)
//  .maximumDurationInSeconds(java.lang.Number)
//  .region(java.lang.String)
//  .runHookPayload(java.lang.String)
//  .timeouts(LambdamicrovmsMicrovmTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.imageArn">imageArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_arn LambdamicrovmsMicrovm#image_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.egressNetworkConnectors">egressNetworkConnectors</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#egress_network_connectors LambdamicrovmsMicrovm#egress_network_connectors}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#execution_role_arn LambdamicrovmsMicrovm#execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.idlePolicy">idlePolicy</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>></code> | idle_policy block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.imageVersion">imageVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_version LambdamicrovmsMicrovm#image_version}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.ingressNetworkConnectors">ingressNetworkConnectors</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#ingress_network_connectors LambdamicrovmsMicrovm#ingress_network_connectors}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.logging">logging</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>></code> | logging block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.maximumDurationInSeconds">maximumDurationInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#maximum_duration_in_seconds LambdamicrovmsMicrovm#maximum_duration_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.runHookPayload">runHookPayload</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#run_hook_payload LambdamicrovmsMicrovm#run_hook_payload}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `imageArn`<sup>Required</sup> <a name="imageArn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.imageArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_arn LambdamicrovmsMicrovm#image_arn}.

---

##### `egressNetworkConnectors`<sup>Optional</sup> <a name="egressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.egressNetworkConnectors"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#egress_network_connectors LambdamicrovmsMicrovm#egress_network_connectors}.

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.executionRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#execution_role_arn LambdamicrovmsMicrovm#execution_role_arn}.

---

##### `idlePolicy`<sup>Optional</sup> <a name="idlePolicy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.idlePolicy"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>>

idle_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#idle_policy LambdamicrovmsMicrovm#idle_policy}

---

##### `imageVersion`<sup>Optional</sup> <a name="imageVersion" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.imageVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_version LambdamicrovmsMicrovm#image_version}.

---

##### `ingressNetworkConnectors`<sup>Optional</sup> <a name="ingressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.ingressNetworkConnectors"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#ingress_network_connectors LambdamicrovmsMicrovm#ingress_network_connectors}.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.logging"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#logging LambdamicrovmsMicrovm#logging}

---

##### `maximumDurationInSeconds`<sup>Optional</sup> <a name="maximumDurationInSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.maximumDurationInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#maximum_duration_in_seconds LambdamicrovmsMicrovm#maximum_duration_in_seconds}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#region LambdamicrovmsMicrovm#region}

---

##### `runHookPayload`<sup>Optional</sup> <a name="runHookPayload" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.runHookPayload"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#run_hook_payload LambdamicrovmsMicrovm#run_hook_payload}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#timeouts LambdamicrovmsMicrovm#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putIdlePolicy">putIdlePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putLogging">putLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetEgressNetworkConnectors">resetEgressNetworkConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetExecutionRoleArn">resetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetIdlePolicy">resetIdlePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetImageVersion">resetImageVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetIngressNetworkConnectors">resetIngressNetworkConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetLogging">resetLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetMaximumDurationInSeconds">resetMaximumDurationInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetRunHookPayload">resetRunHookPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdlePolicy` <a name="putIdlePolicy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putIdlePolicy"></a>

```java
public void putIdlePolicy(IResolvable|java.util.List<LambdamicrovmsMicrovmIdlePolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putIdlePolicy.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>>

---

##### `putLogging` <a name="putLogging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putLogging"></a>

```java
public void putLogging(IResolvable|java.util.List<LambdamicrovmsMicrovmLogging> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putLogging.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putTimeouts"></a>

```java
public void putTimeouts(LambdamicrovmsMicrovmTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a>

---

##### `resetEgressNetworkConnectors` <a name="resetEgressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetEgressNetworkConnectors"></a>

```java
public void resetEgressNetworkConnectors()
```

##### `resetExecutionRoleArn` <a name="resetExecutionRoleArn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetExecutionRoleArn"></a>

```java
public void resetExecutionRoleArn()
```

##### `resetIdlePolicy` <a name="resetIdlePolicy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetIdlePolicy"></a>

```java
public void resetIdlePolicy()
```

##### `resetImageVersion` <a name="resetImageVersion" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetImageVersion"></a>

```java
public void resetImageVersion()
```

##### `resetIngressNetworkConnectors` <a name="resetIngressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetIngressNetworkConnectors"></a>

```java
public void resetIngressNetworkConnectors()
```

##### `resetLogging` <a name="resetLogging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetLogging"></a>

```java
public void resetLogging()
```

##### `resetMaximumDurationInSeconds` <a name="resetMaximumDurationInSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetMaximumDurationInSeconds"></a>

```java
public void resetMaximumDurationInSeconds()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRunHookPayload` <a name="resetRunHookPayload" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetRunHookPayload"></a>

```java
public void resetRunHookPayload()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdamicrovmsMicrovm resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isConstruct"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_microvm.LambdamicrovmsMicrovm;

LambdamicrovmsMicrovm.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_microvm.LambdamicrovmsMicrovm;

LambdamicrovmsMicrovm.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_microvm.LambdamicrovmsMicrovm;

LambdamicrovmsMicrovm.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_microvm.LambdamicrovmsMicrovm;

LambdamicrovmsMicrovm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LambdamicrovmsMicrovm.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LambdamicrovmsMicrovm resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LambdamicrovmsMicrovm to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LambdamicrovmsMicrovm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LambdamicrovmsMicrovm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.idlePolicy">idlePolicy</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList">LambdamicrovmsMicrovmIdlePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList">LambdamicrovmsMicrovmLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.microvmId">microvmId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.startedAt">startedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference">LambdamicrovmsMicrovmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.egressNetworkConnectorsInput">egressNetworkConnectorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.idlePolicyInput">idlePolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageArnInput">imageArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageVersionInput">imageVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.ingressNetworkConnectorsInput">ingressNetworkConnectorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.loggingInput">loggingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.maximumDurationInSecondsInput">maximumDurationInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.runHookPayloadInput">runHookPayloadInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.egressNetworkConnectors">egressNetworkConnectors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageArn">imageArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageVersion">imageVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.ingressNetworkConnectors">ingressNetworkConnectors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.maximumDurationInSeconds">maximumDurationInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.runHookPayload">runHookPayload</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `idlePolicy`<sup>Required</sup> <a name="idlePolicy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.idlePolicy"></a>

```java
public LambdamicrovmsMicrovmIdlePolicyList getIdlePolicy();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList">LambdamicrovmsMicrovmIdlePolicyList</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.logging"></a>

```java
public LambdamicrovmsMicrovmLoggingList getLogging();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList">LambdamicrovmsMicrovmLoggingList</a>

---

##### `microvmId`<sup>Required</sup> <a name="microvmId" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.microvmId"></a>

```java
public java.lang.String getMicrovmId();
```

- *Type:* java.lang.String

---

##### `startedAt`<sup>Required</sup> <a name="startedAt" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.startedAt"></a>

```java
public java.lang.String getStartedAt();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.timeouts"></a>

```java
public LambdamicrovmsMicrovmTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference">LambdamicrovmsMicrovmTimeoutsOutputReference</a>

---

##### `egressNetworkConnectorsInput`<sup>Optional</sup> <a name="egressNetworkConnectorsInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.egressNetworkConnectorsInput"></a>

```java
public java.util.List<java.lang.String> getEgressNetworkConnectorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.executionRoleArnInput"></a>

```java
public java.lang.String getExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `idlePolicyInput`<sup>Optional</sup> <a name="idlePolicyInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.idlePolicyInput"></a>

```java
public IResolvable|java.util.List<LambdamicrovmsMicrovmIdlePolicy> getIdlePolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>>

---

##### `imageArnInput`<sup>Optional</sup> <a name="imageArnInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageArnInput"></a>

```java
public java.lang.String getImageArnInput();
```

- *Type:* java.lang.String

---

##### `imageVersionInput`<sup>Optional</sup> <a name="imageVersionInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageVersionInput"></a>

```java
public java.lang.String getImageVersionInput();
```

- *Type:* java.lang.String

---

##### `ingressNetworkConnectorsInput`<sup>Optional</sup> <a name="ingressNetworkConnectorsInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.ingressNetworkConnectorsInput"></a>

```java
public java.util.List<java.lang.String> getIngressNetworkConnectorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.loggingInput"></a>

```java
public IResolvable|java.util.List<LambdamicrovmsMicrovmLogging> getLoggingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>>

---

##### `maximumDurationInSecondsInput`<sup>Optional</sup> <a name="maximumDurationInSecondsInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.maximumDurationInSecondsInput"></a>

```java
public java.lang.Number getMaximumDurationInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `runHookPayloadInput`<sup>Optional</sup> <a name="runHookPayloadInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.runHookPayloadInput"></a>

```java
public java.lang.String getRunHookPayloadInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.timeoutsInput"></a>

```java
public IResolvable|LambdamicrovmsMicrovmTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a>

---

##### `egressNetworkConnectors`<sup>Required</sup> <a name="egressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.egressNetworkConnectors"></a>

```java
public java.util.List<java.lang.String> getEgressNetworkConnectors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `imageArn`<sup>Required</sup> <a name="imageArn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageArn"></a>

```java
public java.lang.String getImageArn();
```

- *Type:* java.lang.String

---

##### `imageVersion`<sup>Required</sup> <a name="imageVersion" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.imageVersion"></a>

```java
public java.lang.String getImageVersion();
```

- *Type:* java.lang.String

---

##### `ingressNetworkConnectors`<sup>Required</sup> <a name="ingressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.ingressNetworkConnectors"></a>

```java
public java.util.List<java.lang.String> getIngressNetworkConnectors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maximumDurationInSeconds`<sup>Required</sup> <a name="maximumDurationInSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.maximumDurationInSeconds"></a>

```java
public java.lang.Number getMaximumDurationInSeconds();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `runHookPayload`<sup>Required</sup> <a name="runHookPayload" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.runHookPayload"></a>

```java
public java.lang.String getRunHookPayload();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovm.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LambdamicrovmsMicrovmConfig <a name="LambdamicrovmsMicrovmConfig" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_microvm.LambdamicrovmsMicrovmConfig;

LambdamicrovmsMicrovmConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .imageArn(java.lang.String)
//  .egressNetworkConnectors(java.util.List<java.lang.String>)
//  .executionRoleArn(java.lang.String)
//  .idlePolicy(IResolvable|java.util.List<LambdamicrovmsMicrovmIdlePolicy>)
//  .imageVersion(java.lang.String)
//  .ingressNetworkConnectors(java.util.List<java.lang.String>)
//  .logging(IResolvable|java.util.List<LambdamicrovmsMicrovmLogging>)
//  .maximumDurationInSeconds(java.lang.Number)
//  .region(java.lang.String)
//  .runHookPayload(java.lang.String)
//  .timeouts(LambdamicrovmsMicrovmTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.imageArn">imageArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_arn LambdamicrovmsMicrovm#image_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.egressNetworkConnectors">egressNetworkConnectors</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#egress_network_connectors LambdamicrovmsMicrovm#egress_network_connectors}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#execution_role_arn LambdamicrovmsMicrovm#execution_role_arn}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.idlePolicy">idlePolicy</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>></code> | idle_policy block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.imageVersion">imageVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_version LambdamicrovmsMicrovm#image_version}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.ingressNetworkConnectors">ingressNetworkConnectors</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#ingress_network_connectors LambdamicrovmsMicrovm#ingress_network_connectors}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.logging">logging</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>></code> | logging block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.maximumDurationInSeconds">maximumDurationInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#maximum_duration_in_seconds LambdamicrovmsMicrovm#maximum_duration_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.runHookPayload">runHookPayload</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#run_hook_payload LambdamicrovmsMicrovm#run_hook_payload}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `imageArn`<sup>Required</sup> <a name="imageArn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.imageArn"></a>

```java
public java.lang.String getImageArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_arn LambdamicrovmsMicrovm#image_arn}.

---

##### `egressNetworkConnectors`<sup>Optional</sup> <a name="egressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.egressNetworkConnectors"></a>

```java
public java.util.List<java.lang.String> getEgressNetworkConnectors();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#egress_network_connectors LambdamicrovmsMicrovm#egress_network_connectors}.

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#execution_role_arn LambdamicrovmsMicrovm#execution_role_arn}.

---

##### `idlePolicy`<sup>Optional</sup> <a name="idlePolicy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.idlePolicy"></a>

```java
public IResolvable|java.util.List<LambdamicrovmsMicrovmIdlePolicy> getIdlePolicy();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>>

idle_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#idle_policy LambdamicrovmsMicrovm#idle_policy}

---

##### `imageVersion`<sup>Optional</sup> <a name="imageVersion" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.imageVersion"></a>

```java
public java.lang.String getImageVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#image_version LambdamicrovmsMicrovm#image_version}.

---

##### `ingressNetworkConnectors`<sup>Optional</sup> <a name="ingressNetworkConnectors" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.ingressNetworkConnectors"></a>

```java
public java.util.List<java.lang.String> getIngressNetworkConnectors();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#ingress_network_connectors LambdamicrovmsMicrovm#ingress_network_connectors}.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.logging"></a>

```java
public IResolvable|java.util.List<LambdamicrovmsMicrovmLogging> getLogging();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#logging LambdamicrovmsMicrovm#logging}

---

##### `maximumDurationInSeconds`<sup>Optional</sup> <a name="maximumDurationInSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.maximumDurationInSeconds"></a>

```java
public java.lang.Number getMaximumDurationInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#maximum_duration_in_seconds LambdamicrovmsMicrovm#maximum_duration_in_seconds}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#region LambdamicrovmsMicrovm#region}

---

##### `runHookPayload`<sup>Optional</sup> <a name="runHookPayload" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.runHookPayload"></a>

```java
public java.lang.String getRunHookPayload();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#run_hook_payload LambdamicrovmsMicrovm#run_hook_payload}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmConfig.property.timeouts"></a>

```java
public LambdamicrovmsMicrovmTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#timeouts LambdamicrovmsMicrovm#timeouts}

---

### LambdamicrovmsMicrovmIdlePolicy <a name="LambdamicrovmsMicrovmIdlePolicy" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_microvm.LambdamicrovmsMicrovmIdlePolicy;

LambdamicrovmsMicrovmIdlePolicy.builder()
    .autoResumeEnabled(java.lang.Boolean|IResolvable)
    .maxIdleDurationSeconds(java.lang.Number)
    .suspendedDurationSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.autoResumeEnabled">autoResumeEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#auto_resume_enabled LambdamicrovmsMicrovm#auto_resume_enabled}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.maxIdleDurationSeconds">maxIdleDurationSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#max_idle_duration_seconds LambdamicrovmsMicrovm#max_idle_duration_seconds}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.suspendedDurationSeconds">suspendedDurationSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#suspended_duration_seconds LambdamicrovmsMicrovm#suspended_duration_seconds}. |

---

##### `autoResumeEnabled`<sup>Required</sup> <a name="autoResumeEnabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.autoResumeEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoResumeEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#auto_resume_enabled LambdamicrovmsMicrovm#auto_resume_enabled}.

---

##### `maxIdleDurationSeconds`<sup>Required</sup> <a name="maxIdleDurationSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.maxIdleDurationSeconds"></a>

```java
public java.lang.Number getMaxIdleDurationSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#max_idle_duration_seconds LambdamicrovmsMicrovm#max_idle_duration_seconds}.

---

##### `suspendedDurationSeconds`<sup>Required</sup> <a name="suspendedDurationSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy.property.suspendedDurationSeconds"></a>

```java
public java.lang.Number getSuspendedDurationSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#suspended_duration_seconds LambdamicrovmsMicrovm#suspended_duration_seconds}.

---

### LambdamicrovmsMicrovmLogging <a name="LambdamicrovmsMicrovmLogging" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_microvm.LambdamicrovmsMicrovmLogging;

LambdamicrovmsMicrovmLogging.builder()
//  .cloudwatch(IResolvable|java.util.List<LambdamicrovmsMicrovmLoggingCloudwatch>)
//  .disabled(IResolvable|java.util.List<LambdamicrovmsMicrovmLoggingDisabled>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging.property.cloudwatch">cloudwatch</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>></code> | cloudwatch block. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging.property.disabled">disabled</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>></code> | disabled block. |

---

##### `cloudwatch`<sup>Optional</sup> <a name="cloudwatch" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging.property.cloudwatch"></a>

```java
public IResolvable|java.util.List<LambdamicrovmsMicrovmLoggingCloudwatch> getCloudwatch();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>>

cloudwatch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#cloudwatch LambdamicrovmsMicrovm#cloudwatch}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging.property.disabled"></a>

```java
public IResolvable|java.util.List<LambdamicrovmsMicrovmLoggingDisabled> getDisabled();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>>

disabled block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#disabled LambdamicrovmsMicrovm#disabled}

---

### LambdamicrovmsMicrovmLoggingCloudwatch <a name="LambdamicrovmsMicrovmLoggingCloudwatch" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_microvm.LambdamicrovmsMicrovmLoggingCloudwatch;

LambdamicrovmsMicrovmLoggingCloudwatch.builder()
//  .logGroup(java.lang.String)
//  .logStream(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#log_group LambdamicrovmsMicrovm#log_group}. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch.property.logStream">logStream</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#log_stream LambdamicrovmsMicrovm#log_stream}. |

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#log_group LambdamicrovmsMicrovm#log_group}.

---

##### `logStream`<sup>Optional</sup> <a name="logStream" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch.property.logStream"></a>

```java
public java.lang.String getLogStream();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#log_stream LambdamicrovmsMicrovm#log_stream}.

---

### LambdamicrovmsMicrovmLoggingDisabled <a name="LambdamicrovmsMicrovmLoggingDisabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_microvm.LambdamicrovmsMicrovmLoggingDisabled;

LambdamicrovmsMicrovmLoggingDisabled.builder()
    .build();
```


### LambdamicrovmsMicrovmTimeouts <a name="LambdamicrovmsMicrovmTimeouts" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_microvm.LambdamicrovmsMicrovmTimeouts;

LambdamicrovmsMicrovmTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#create LambdamicrovmsMicrovm#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/lambdamicrovms_microvm#delete LambdamicrovmsMicrovm#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdamicrovmsMicrovmIdlePolicyList <a name="LambdamicrovmsMicrovmIdlePolicyList" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_microvm.LambdamicrovmsMicrovmIdlePolicyList;

new LambdamicrovmsMicrovmIdlePolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.get"></a>

```java
public LambdamicrovmsMicrovmIdlePolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LambdamicrovmsMicrovmIdlePolicy> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>>

---


### LambdamicrovmsMicrovmIdlePolicyOutputReference <a name="LambdamicrovmsMicrovmIdlePolicyOutputReference" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_microvm.LambdamicrovmsMicrovmIdlePolicyOutputReference;

new LambdamicrovmsMicrovmIdlePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.autoResumeEnabledInput">autoResumeEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.maxIdleDurationSecondsInput">maxIdleDurationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.suspendedDurationSecondsInput">suspendedDurationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.autoResumeEnabled">autoResumeEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.maxIdleDurationSeconds">maxIdleDurationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.suspendedDurationSeconds">suspendedDurationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoResumeEnabledInput`<sup>Optional</sup> <a name="autoResumeEnabledInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.autoResumeEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoResumeEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxIdleDurationSecondsInput`<sup>Optional</sup> <a name="maxIdleDurationSecondsInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.maxIdleDurationSecondsInput"></a>

```java
public java.lang.Number getMaxIdleDurationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `suspendedDurationSecondsInput`<sup>Optional</sup> <a name="suspendedDurationSecondsInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.suspendedDurationSecondsInput"></a>

```java
public java.lang.Number getSuspendedDurationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `autoResumeEnabled`<sup>Required</sup> <a name="autoResumeEnabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.autoResumeEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoResumeEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxIdleDurationSeconds`<sup>Required</sup> <a name="maxIdleDurationSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.maxIdleDurationSeconds"></a>

```java
public java.lang.Number getMaxIdleDurationSeconds();
```

- *Type:* java.lang.Number

---

##### `suspendedDurationSeconds`<sup>Required</sup> <a name="suspendedDurationSeconds" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.suspendedDurationSeconds"></a>

```java
public java.lang.Number getSuspendedDurationSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdamicrovmsMicrovmIdlePolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmIdlePolicy">LambdamicrovmsMicrovmIdlePolicy</a>

---


### LambdamicrovmsMicrovmLoggingCloudwatchList <a name="LambdamicrovmsMicrovmLoggingCloudwatchList" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_microvm.LambdamicrovmsMicrovmLoggingCloudwatchList;

new LambdamicrovmsMicrovmLoggingCloudwatchList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.get"></a>

```java
public LambdamicrovmsMicrovmLoggingCloudwatchOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LambdamicrovmsMicrovmLoggingCloudwatch> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>>

---


### LambdamicrovmsMicrovmLoggingCloudwatchOutputReference <a name="LambdamicrovmsMicrovmLoggingCloudwatchOutputReference" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_microvm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference;

new LambdamicrovmsMicrovmLoggingCloudwatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resetLogStream">resetLogStream</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resetLogGroup"></a>

```java
public void resetLogGroup()
```

##### `resetLogStream` <a name="resetLogStream" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.resetLogStream"></a>

```java
public void resetLogStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logStreamInput">logStreamInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logStream">logStream</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logGroupInput"></a>

```java
public java.lang.String getLogGroupInput();
```

- *Type:* java.lang.String

---

##### `logStreamInput`<sup>Optional</sup> <a name="logStreamInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logStreamInput"></a>

```java
public java.lang.String getLogStreamInput();
```

- *Type:* java.lang.String

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

---

##### `logStream`<sup>Required</sup> <a name="logStream" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.logStream"></a>

```java
public java.lang.String getLogStream();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdamicrovmsMicrovmLoggingCloudwatch getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>

---


### LambdamicrovmsMicrovmLoggingDisabledList <a name="LambdamicrovmsMicrovmLoggingDisabledList" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_microvm.LambdamicrovmsMicrovmLoggingDisabledList;

new LambdamicrovmsMicrovmLoggingDisabledList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.get"></a>

```java
public LambdamicrovmsMicrovmLoggingDisabledOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LambdamicrovmsMicrovmLoggingDisabled> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>>

---


### LambdamicrovmsMicrovmLoggingDisabledOutputReference <a name="LambdamicrovmsMicrovmLoggingDisabledOutputReference" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_microvm.LambdamicrovmsMicrovmLoggingDisabledOutputReference;

new LambdamicrovmsMicrovmLoggingDisabledOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdamicrovmsMicrovmLoggingDisabled getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>

---


### LambdamicrovmsMicrovmLoggingList <a name="LambdamicrovmsMicrovmLoggingList" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_microvm.LambdamicrovmsMicrovmLoggingList;

new LambdamicrovmsMicrovmLoggingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.get"></a>

```java
public LambdamicrovmsMicrovmLoggingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LambdamicrovmsMicrovmLogging> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>>

---


### LambdamicrovmsMicrovmLoggingOutputReference <a name="LambdamicrovmsMicrovmLoggingOutputReference" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_microvm.LambdamicrovmsMicrovmLoggingOutputReference;

new LambdamicrovmsMicrovmLoggingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putCloudwatch">putCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putDisabled">putDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resetCloudwatch">resetCloudwatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatch` <a name="putCloudwatch" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putCloudwatch"></a>

```java
public void putCloudwatch(IResolvable|java.util.List<LambdamicrovmsMicrovmLoggingCloudwatch> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putCloudwatch.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>>

---

##### `putDisabled` <a name="putDisabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putDisabled"></a>

```java
public void putDisabled(IResolvable|java.util.List<LambdamicrovmsMicrovmLoggingDisabled> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.putDisabled.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>>

---

##### `resetCloudwatch` <a name="resetCloudwatch" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resetCloudwatch"></a>

```java
public void resetCloudwatch()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.cloudwatch">cloudwatch</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList">LambdamicrovmsMicrovmLoggingCloudwatchList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.disabled">disabled</a></code> | <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList">LambdamicrovmsMicrovmLoggingDisabledList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.cloudwatchInput">cloudwatchInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.disabledInput">disabledInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatch`<sup>Required</sup> <a name="cloudwatch" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.cloudwatch"></a>

```java
public LambdamicrovmsMicrovmLoggingCloudwatchList getCloudwatch();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatchList">LambdamicrovmsMicrovmLoggingCloudwatchList</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.disabled"></a>

```java
public LambdamicrovmsMicrovmLoggingDisabledList getDisabled();
```

- *Type:* <a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabledList">LambdamicrovmsMicrovmLoggingDisabledList</a>

---

##### `cloudwatchInput`<sup>Optional</sup> <a name="cloudwatchInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.cloudwatchInput"></a>

```java
public IResolvable|java.util.List<LambdamicrovmsMicrovmLoggingCloudwatch> getCloudwatchInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingCloudwatch">LambdamicrovmsMicrovmLoggingCloudwatch</a>>

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.disabledInput"></a>

```java
public IResolvable|java.util.List<LambdamicrovmsMicrovmLoggingDisabled> getDisabledInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingDisabled">LambdamicrovmsMicrovmLoggingDisabled</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLoggingOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdamicrovmsMicrovmLogging getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmLogging">LambdamicrovmsMicrovmLogging</a>

---


### LambdamicrovmsMicrovmTimeoutsOutputReference <a name="LambdamicrovmsMicrovmTimeoutsOutputReference" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.lambdamicrovms_microvm.LambdamicrovmsMicrovmTimeoutsOutputReference;

new LambdamicrovmsMicrovmTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdamicrovmsMicrovmTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.lambdamicrovmsMicrovm.LambdamicrovmsMicrovmTimeouts">LambdamicrovmsMicrovmTimeouts</a>

---



